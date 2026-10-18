(() => {
  "use strict";

  const storageKey = "yajnaseni.healthJournal.v1";
  const entryTypes = ["period", "symptoms", "mood", "sleep", "lifestyle", "water", "notes"];
  const typeLabels = {
    period: "Period",
    symptoms: "Symptoms",
    mood: "Mood",
    sleep: "Sleep",
    lifestyle: "Lifestyle",
    water: "Water",
    notes: "Notes"
  };
  const typeTitles = {
    period: "Period started",
    symptoms: "Symptom check-in",
    mood: "Mood check-in",
    sleep: "Sleep check-in",
    lifestyle: "Lifestyle note",
    water: "Water check-in",
    notes: "Journal note"
  };
  const typeIcons = {
    overview: '<svg viewBox="0 0 24 24"><path d="M3.5 10.5 12 3l8.5 7.5M5.5 9v11h13V9M9 20v-6h6v6"></path></svg>',
    period: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"></rect><path d="M8 3v4m8-4v4M4 10h16m-8 3v5m-2.5-2.5h5"></path></svg>',
    symptoms: '<svg viewBox="0 0 24 24"><path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z"></path></svg>',
    mood: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M8.5 14.5s1.2 2 3.5 2 3.5-2 3.5-2M9 9h.01M15 9h.01"></path></svg>',
    lifestyle: '<svg viewBox="0 0 24 24"><path d="M12 21V11m0 5c-6 0-8-4-8-10 5 0 8 2 8 7m0 1c5 0 8-4 8-10-5 0-8 2-8 7"></path></svg>',
    notes: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7m-7 4h7"></path></svg>',
    sleep: '<svg viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"></path><path d="m16.5 4 .5 1.5 1.5.5-1.5.5-.5 1.5L16 6.5l-1.5-.5 1.5-.5.5-1.5Z"></path></svg>',
    water: '<svg viewBox="0 0 24 24"><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z"></path><path d="M9 15a3 3 0 0 0 3 3"></path></svg>'
  };
  const symptomOptions = [
    "Period pain or cramps", "Headache", "Bloating", "Acne or breakouts",
    "Fatigue or low energy", "Breast tenderness", "Pelvic discomfort",
    "Mood changes", "Hair changes", "Other"
  ];
  const iconByType = { period: "period", symptoms: "symptoms", mood: "mood", sleep: "sleep", lifestyle: "lifestyle", water: "water", notes: "notes" };
  const today = startOfDay(new Date());
  const todayKey = dateKey(today);
  const state = {
    entries: [],
    selectedDate: todayKey,
    displayedMonth: new Date(today.getFullYear(), today.getMonth(), 1),
    view: "overview",
    showAllEntries: false,
    editingId: null,
    detailId: null,
    storageWritable: true,
    toastTimeout: 0
  };
  const byId = (id) => document.getElementById(id);
  const dialog = byId("entry-dialog");
  const entryForm = byId("entry-form");
  const entryTypeInput = byId("entry-type");
  const entryDateInput = byId("entry-date");
  const entryFields = byId("entry-fields");
  const entryDetails = byId("entry-details");
  const dialogError = byId("dialog-error");
  const toast = byId("journal-toast");

  function startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function parseDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
  }

  function addDays(date, amount) {
    const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    result.setDate(result.getDate() + amount);
    return result;
  }

  function daysBetween(from, to) {
    return Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / 86400000);
  }

  function formatDate(value, options) {
    const date = parseDate(value);
    if (!date) return "Date not available";
    return new Intl.DateTimeFormat("en-IN", options || { day: "numeric", month: "short", year: "numeric" }).format(date);
  }

  function safeStoredEntries() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.some((entry) =>
        !entry || typeof entry !== "object" || typeof entry.id !== "string" ||
        !entryTypes.includes(entry.type) || !parseDate(entry.date) || !entry.data || typeof entry.data !== "object"
      )) throw new Error("The saved journal data is not in the expected format.");
      return parsed;
    } catch (error) {
      state.storageWritable = false;
      showToast(error instanceof SyntaxError
        ? "Saved journal data could not be read. It has not been overwritten."
        : `Journal storage is unavailable: ${error.message}`);
      return [];
    }
  }

  function persistEntries() {
    if (!state.storageWritable) {
      showToast("This change is only in memory because the saved journal data could not be safely updated.");
      return false;
    }
    try {
      localStorage.setItem(storageKey, JSON.stringify(state.entries));
      return true;
    } catch (error) {
      state.storageWritable = false;
      showToast(`This entry is visible for now, but could not be saved in this browser: ${error.message}`);
      return false;
    }
  }

  function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(state.toastTimeout);
    state.toastTimeout = window.setTimeout(() => { toast.hidden = true; }, 5200);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]
    );
  }

  function icon(type, className) {
    const wrapper = document.createElement("span");
    wrapper.className = className;
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.innerHTML = typeIcons[type] || typeIcons.notes;
    return wrapper;
  }

  function periodEntries() {
    return state.entries.filter((entry) => entry.type === "period" && parseDate(entry.date))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  function periodLength(entry) {
    const start = parseDate(entry.date);
    const end = parseDate(entry.data.endDate);
    if (!start || !end || end < start || daysBetween(start, end) > 30) return null;
    return daysBetween(start, end) + 1;
  }

  function cycleIntervals() {
    const periods = periodEntries();
    const intervals = [];
    for (let index = 1; index < periods.length; index += 1) {
      const difference = daysBetween(parseDate(periods[index - 1].date), parseDate(periods[index].date));
      if (difference >= 15 && difference <= 60) intervals.push({ days: difference, date: periods[index].date });
    }
    return intervals;
  }

  function average(values) {
    return values.length ? values.reduce((total, value) => total + value, 0) / values.length : null;
  }

  function roundedAverage(values) {
    const result = average(values);
    return result == null ? null : Math.round(result);
  }

  function periodPrediction() {
    const periods = periodEntries();
    const intervals = cycleIntervals();
    if (periods.length < 3 || intervals.length < 2) return null;
    const cycleDays = average(intervals.map((interval) => interval.days));
    const nextStart = addDays(parseDate(periods[periods.length - 1].date), Math.round(cycleDays));
    const ovulation = addDays(nextStart, -14);
    return { nextStart, fertileStart: addDays(ovulation, -5), ovulation, fertileEnd: ovulation };
  }

  function entryMatchesView(entry, view) {
    if (view === "overview") return true;
    if (view === "lifestyle") return ["lifestyle", "sleep", "water"].includes(entry.type);
    return entry.type === view;
  }

  function todayEntry(type) {
    return state.entries.filter((entry) => entry.type === type && entry.date === todayKey)
      .sort((a, b) => String(b.updatedAt || b.createdAt).localeCompare(String(a.updatedAt || a.createdAt)))[0];
  }

  function cardSummary(type) {
    const entry = todayEntry(type);
    if (!entry) return {
      period: "Not logged",
      symptoms: "Not logged",
      mood: "Not logged",
      sleep: "Not logged",
      water: "Not logged",
      notes: "No notes"
    }[type];
    const data = entry.data;
    if (type === "period") return `${data.flow || "Flow logged"} flow`;
    if (type === "symptoms") return data.symptoms && data.symptoms.length ? `${data.symptoms.length} logged` : "Symptoms logged";
    if (type === "mood") return data.mood || "Mood logged";
    if (type === "sleep") return data.hours ? `${data.hours} hrs` : "Sleep logged";
    if (type === "water") return data.glasses ? `${data.glasses} glasses` : "Water logged";
    const count = state.entries.filter((item) => item.type === "notes" && item.date === todayKey).length;
    return `${count} ${count === 1 ? "note" : "notes"}`;
  }

  function renderCheckin() {
    const definitions = [
      ["period", "Period"], ["symptoms", "Symptoms"], ["mood", "Mood"],
      ["sleep", "Sleep"], ["water", "Water"], ["notes", "Notes"]
    ];
    const grid = byId("checkin-grid");
    grid.replaceChildren();
    byId("today-date").textContent = new Intl.DateTimeFormat("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" }).format(today);
    definitions.forEach(([type, title]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "checkin-card";
      button.dataset.checkinType = type;
      button.hidden = !viewIncludesCheckin(type);
      button.append(icon(type, "checkin-icon"));
      const name = document.createElement("span");
      name.className = "checkin-name";
      name.textContent = title;
      const summary = document.createElement("span");
      summary.className = "checkin-summary";
      summary.textContent = cardSummary(type);
      button.append(name, summary);
      grid.append(button);
    });
  }

  function viewIncludesCheckin(type) {
    if (state.view === "overview") return true;
    if (state.view === "lifestyle") return ["sleep", "water"].includes(type);
    return state.view === type;
  }

  function entrySummary(entry) {
    const data = entry.data || {};
    if (entry.type === "period") return `Flow: ${data.flow || "not specified"}${data.cramps && data.cramps !== "None" ? ` · Cramps: ${data.cramps}` : ""}`;
    if (entry.type === "symptoms") return `${(data.symptoms || []).join(", ") || "No symptom details"}${data.severity ? ` · ${data.severity} severity` : ""}`;
    if (entry.type === "mood") return `${data.mood || "Mood noted"}${data.notes ? ` · ${data.notes}` : ""}`;
    if (entry.type === "sleep") return `${data.hours ? `${data.hours} hours` : "Sleep noted"}${data.quality ? ` · ${data.quality}` : ""}`;
    if (entry.type === "water") return `${data.glasses || "Water"} ${Number(data.glasses) === 1 ? "glass" : "glasses"}`;
    if (entry.type === "lifestyle") return data.activity || data.habits || data.meals || "Lifestyle note";
    return data.title || data.content || "Journal note";
  }

  function filteredEntries() {
    return state.entries
      .filter((entry) => entryMatchesView(entry, state.view))
      .sort((a, b) => b.date.localeCompare(a.date) || String(b.createdAt).localeCompare(String(a.createdAt)));
  }

  function renderRecentEntries() {
    const container = byId("recent-entries");
    container.replaceChildren();
    const entries = filteredEntries();
    const visible = state.showAllEntries ? entries : entries.slice(0, 5);
    byId("view-all").hidden = entries.length <= 5;
    byId("view-all").textContent = state.showAllEntries ? "Show recent " : "View all ";
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = state.showAllEntries ? "↑" : "→";
    byId("view-all").append(arrow);
    if (!visible.length) {
      const empty = document.createElement("div");
      empty.className = "empty-entries";
      const title = document.createElement("strong");
      title.textContent = state.view === "overview" ? "Your journal starts here" : `No ${state.view} entries yet`;
      const description = document.createElement("span");
      description.textContent = "Add an entry when you feel ready. Only your saved entries appear here.";
      empty.append(title, description);
      container.append(empty);
      return;
    }
    visible.forEach((entry) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "journal-entry-row";
      button.dataset.openEntry = entry.id;
      const date = parseDate(entry.date);
      const badge = document.createElement("span");
      badge.className = "entry-date-badge";
      const day = document.createElement("strong");
      day.textContent = date ? String(date.getDate()) : "—";
      const month = document.createElement("span");
      month.textContent = date ? new Intl.DateTimeFormat("en-IN", { month: "short" }).format(date) : "";
      badge.append(day, month);
      const entryIcon = icon(iconByType[entry.type], "entry-icon");
      const copy = document.createElement("span");
      copy.className = "entry-copy";
      const title = document.createElement("span");
      title.className = "entry-title";
      title.textContent = entry.data.title || typeTitles[entry.type];
      const summary = document.createElement("span");
      summary.className = "entry-summary";
      summary.textContent = entrySummary(entry);
      const action = document.createElement("span");
      action.className = "entry-arrow";
      action.setAttribute("aria-hidden", "true");
      action.textContent = "›";
      copy.append(title, summary);
      button.append(badge, entryIcon, copy, action);
      container.append(button);
    });
  }

  function renderCalendar() {
    const year = state.displayedMonth.getFullYear();
    const month = state.displayedMonth.getMonth();
    byId("calendar-month").textContent = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" }).format(state.displayedMonth);
    const first = new Date(year, month, 1);
    const start = new Date(year, month, 1 - first.getDay());
    const periods = periodEntries();
    const estimate = periodPrediction();
    const days = byId("calendar-days");
    days.replaceChildren();
    for (let index = 0; index < 42; index += 1) {
      const date = addDays(start, index);
      const key = dateKey(date);
      const period = periods.some((entry) => {
        const end = parseDate(entry.data.endDate) || parseDate(entry.date);
        return date >= parseDate(entry.date) && date <= end;
      });
      const fertile = estimate && date >= estimate.fertileStart && date <= estimate.fertileEnd;
      const ovulation = estimate && key === dateKey(estimate.ovulation);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "calendar-day";
      if (date.getMonth() !== month) button.classList.add("is-outside");
      if (key === todayKey) button.classList.add("is-today");
      if (period) button.classList.add("is-period");
      if (fertile) button.classList.add("is-fertile");
      if (ovulation) button.classList.add("is-ovulation");
      if (key === state.selectedDate) button.classList.add("is-selected");
      button.dataset.date = key;
      button.textContent = String(date.getDate());
      button.setAttribute("aria-label", `${new Intl.DateTimeFormat("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date)}${period ? ", logged period" : ""}${fertile ? ", estimated fertile window" : ""}${ovulation ? ", estimated ovulation" : ""}`);
      button.setAttribute("aria-pressed", String(key === state.selectedDate));
      days.append(button);
    }
    renderCycleStats(estimate);
  }

  function renderCycleStats(estimate) {
    const intervals = cycleIntervals();
    const lengths = periodEntries().map(periodLength).filter((value) => value != null);
    const cycleAverage = roundedAverage(intervals.map((item) => item.days));
    const periodAverage = roundedAverage(lengths);
    byId("average-cycle").textContent = cycleAverage == null ? "Not enough data" : `${cycleAverage} days`;
    byId("average-period").textContent = periodAverage == null ? "Not enough data" : `${periodAverage} days`;
    const next = byId("next-cycle-card");
    next.replaceChildren();
    next.hidden = !estimate;
    if (estimate) {
      next.append(icon("period", "stat-symbol"));
      const copy = document.createElement("div");
      const label = document.createElement("span");
      label.className = "stat-label";
      label.textContent = "Next cycle (estimated)";
      const date = document.createElement("strong");
      date.textContent = formatDate(dateKey(estimate.nextStart), { day: "numeric", month: "short", year: "numeric" });
      const remaining = document.createElement("small");
      const gap = daysBetween(today, estimate.nextStart);
      remaining.textContent = gap >= 0 ? `About ${gap} days from today` : "Estimated date has passed";
      copy.append(label, date, remaining);
      next.append(copy);
    }
  }

  function symptomCounts() {
    const counts = new Map();
    state.entries.filter((entry) => entry.type === "symptoms").forEach((entry) => {
      (entry.data.symptoms || []).forEach((symptom) => {
        const label = String(symptom).trim();
        if (label) counts.set(label, (counts.get(label) || 0) + 1);
      });
    });
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }

  function renderCycleChart() {
    const range = Number(byId("insight-range").value) || 3;
    const cutoff = new Date(today.getFullYear(), today.getMonth() - range + 1, 1);
    const intervals = cycleIntervals().filter((item) => parseDate(item.date) >= cutoff);
    const svg = byId("cycle-chart");
    const empty = byId("chart-empty");
    svg.replaceChildren();
    if (intervals.length < 2) {
      svg.hidden = true;
      empty.hidden = false;
      return;
    }
    svg.hidden = false;
    empty.hidden = true;
    const values = intervals.map((item) => item.days);
    const min = Math.max(10, Math.min(...values) - 5);
    const max = Math.max(...values) + 5;
    const points = values.map((value, index) => {
      const x = 22 + index * (256 / Math.max(1, values.length - 1));
      const y = 68 - ((value - min) / Math.max(1, max - min)) * 47;
      return { x, y, value, date: intervals[index].date };
    });
    const svgNS = "http://www.w3.org/2000/svg";
    [21, 44, 68].forEach((y) => {
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", "12");
      line.setAttribute("x2", "288");
      line.setAttribute("y1", String(y));
      line.setAttribute("y2", String(y));
      line.setAttribute("class", "chart-grid-line");
      svg.append(line);
    });
    const path = document.createElementNS(svgNS, "polyline");
    path.setAttribute("class", "chart-cycle-line");
    path.setAttribute("points", points.map((point) => `${point.x},${point.y}`).join(" "));
    svg.append(path);
    points.forEach((point) => {
      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", String(point.x));
      circle.setAttribute("cy", String(point.y));
      circle.setAttribute("r", "3.2");
      circle.setAttribute("class", "chart-cycle-point");
      circle.setAttribute("aria-label", `${point.value} day cycle beginning ${formatDate(point.date)}`);
      svg.append(circle);
    });
  }

  function renderInsights() {
    const cycleAverage = roundedAverage(cycleIntervals().map((item) => item.days));
    const periodAverage = roundedAverage(periodEntries().map(periodLength).filter((value) => value != null));
    const frequent = symptomCounts().find(([, count]) => count > 1);
    byId("insight-cycle-length").textContent = cycleAverage == null ? "—" : String(cycleAverage);
    byId("insight-period-length").textContent = periodAverage == null ? "—" : String(periodAverage);
    byId("insight-common-symptom").textContent = frequent ? frequent[0] : "—";
    renderCycleChart();
    renderPatterns();
  }

  function renderPatterns() {
    const list = byId("pattern-list");
    list.replaceChildren();
    const patterns = [];
    const counts = symptomCounts();
    const repeated = counts.find(([, count]) => count >= 3);
    if (repeated) patterns.push(`“${repeated[0]}” appears in ${repeated[1]} of your symptom entries.`);
    const periods = periodEntries();
    const intervals = cycleIntervals();
    if (periods.length >= 3 && intervals.length >= 2) {
      const variation = Math.max(...intervals.map((item) => item.days)) - Math.min(...intervals.map((item) => item.days));
      patterns.push(`Your logged cycle intervals ranged from ${Math.min(...intervals.map((item) => item.days))} to ${Math.max(...intervals.map((item) => item.days))} days.`);
      if (variation > 0) patterns.push(`There was a ${variation}-day difference between the shortest and longest logged intervals.`);
    }
    const moodEntries = state.entries.filter((entry) => entry.type === "mood" && entry.data.mood);
    if (moodEntries.length >= 3) {
      const moodCounts = new Map();
      moodEntries.forEach((entry) => moodCounts.set(entry.data.mood, (moodCounts.get(entry.data.mood) || 0) + 1));
      const commonMood = [...moodCounts.entries()].sort((a, b) => b[1] - a[1])[0];
      if (commonMood && commonMood[1] >= 3) patterns.push(`You recorded “${commonMood[0]}” ${commonMood[1]} times across ${moodEntries.length} mood check-ins.`);
    }
    if (!patterns.length) {
      const empty = document.createElement("p");
      empty.className = "pattern-empty";
      empty.textContent = "Add a few entries over time. Observations will appear here only when there is enough of your own data.";
      list.append(empty);
      return;
    }
    patterns.slice(0, 3).forEach((pattern) => {
      const item = document.createElement("li");
      item.textContent = pattern;
      list.append(item);
    });
  }

  function setView(view) {
    if (!["overview", ...entryTypes].includes(view)) return;
    state.view = view;
    state.showAllEntries = false;
    document.querySelectorAll(".journal-tab").forEach((tab) => {
      const active = tab.dataset.view === view;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    byId("recent-title").textContent = view === "overview" ? "Recent Entries" : `${typeLabels[view] || "Lifestyle"} Entries`;
    renderCheckin();
    renderRecentEntries();
  }

  function field(label, name, type, options) {
    const opts = options || {};
    const wrap = document.createElement("div");
    wrap.className = opts.full ? "full-field" : "";
    const labelElement = document.createElement("label");
    labelElement.className = "form-label";
    labelElement.htmlFor = `entry-${name}`;
    labelElement.textContent = label;
    const control = type === "textarea" ? document.createElement("textarea")
      : type === "select" ? document.createElement("select")
        : document.createElement("input");
    control.id = `entry-${name}`;
    control.name = name;
    if (type !== "textarea" && type !== "select") control.type = type;
    if (opts.required) control.required = true;
    if (opts.min != null) control.min = String(opts.min);
    if (opts.max != null) control.max = String(opts.max);
    if (opts.step != null) control.step = String(opts.step);
    if (opts.placeholder) control.placeholder = opts.placeholder;
    if (type === "select") {
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = opts.placeholder || "Choose an option";
      control.append(placeholder);
      (opts.options || []).forEach((option) => {
        const choice = document.createElement("option");
        choice.value = option;
        choice.textContent = option;
        control.append(choice);
      });
    }
    wrap.append(labelElement, control);
    return wrap;
  }

  function checkboxGroup() {
    const wrap = document.createElement("fieldset");
    wrap.className = "full-field";
    wrap.style.border = "0";
    wrap.style.margin = "0";
    wrap.style.padding = "0";
    const legend = document.createElement("legend");
    legend.className = "form-label";
    legend.textContent = "Choose any symptoms you noticed";
    const choices = document.createElement("div");
    choices.className = "symptom-choice-grid";
    symptomOptions.forEach((symptom, index) => {
      const label = document.createElement("label");
      label.className = "symptom-choice";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "symptoms";
      input.value = symptom;
      input.id = `entry-symptom-${index}`;
      const text = document.createElement("span");
      text.textContent = symptom;
      label.append(input, text);
      choices.append(label);
    });
    wrap.append(legend, choices);
    return wrap;
  }

  function buildFields(type, data) {
    entryFields.replaceChildren();
    const grid = document.createElement("div");
    grid.className = "dialog-field-grid";
    const add = (node) => grid.append(node);
    if (type === "period") {
      add(field("Period end date (optional)", "endDate", "date"));
      add(field("Flow level", "flow", "select", { options: ["Light", "Moderate", "Heavy"] }));
      add(field("Cramps (optional)", "cramps", "select", { options: ["None", "Mild", "Moderate", "Severe"] }));
      add(field("Notes (optional)", "notes", "textarea", { full: true, placeholder: "Anything you would like to remember" }));
    } else if (type === "symptoms") {
      add(checkboxGroup());
      add(field("Severity", "severity", "select", { options: ["Mild", "Moderate", "Severe"] }));
      add(field("Duration (optional)", "duration", "select", { options: ["Today", "A few days", "A few weeks", "A few months", "Not sure"] }));
      add(field("Notes (optional)", "notes", "textarea", { full: true }));
    } else if (type === "mood") {
      add(field("How are you feeling?", "mood", "select", { required: true, options: ["Good", "Calm", "Hopeful", "Tired", "Anxious", "Low", "Irritable", "Other"] }));
      add(field("Notes (optional)", "notes", "textarea", { full: true, placeholder: "Add any context you would like to remember" }));
    } else if (type === "sleep") {
      add(field("Hours slept", "hours", "number", { required: true, min: 0, max: 24, step: .25, placeholder: "e.g. 7.5" }));
      add(field("Sleep quality (optional)", "quality", "select", { options: ["Restful", "Okay", "Interrupted", "Restless"] }));
      add(field("Notes (optional)", "notes", "textarea", { full: true }));
    } else if (type === "lifestyle") {
      add(field("Activity (optional)", "activity", "text", { placeholder: "e.g. Walked for 30 minutes" }));
      add(field("Meals or nourishment (optional)", "meals", "text", { placeholder: "Add a brief note" }));
      add(field("Habits (optional)", "habits", "text", { full: true, placeholder: "Anything else you want to record" }));
      add(field("Notes (optional)", "notes", "textarea", { full: true }));
    } else if (type === "water") {
      add(field("Water intake (glasses)", "glasses", "number", { required: true, min: 0, max: 100, step: 1, placeholder: "e.g. 6" }));
    } else {
      add(field("Title", "title", "text", { required: true, placeholder: "Give this note a title" }));
      add(field("Your note", "content", "textarea", { required: true, full: true, placeholder: "Write anything you would like to remember" }));
    }
    entryFields.append(grid);
    if (type === "period") {
      const endDate = byId("entry-endDate");
      if (data.endDate) endDate.value = data.endDate;
    }
    Object.entries(data || {}).forEach(([name, value]) => {
      if (name === "symptoms" && Array.isArray(value)) {
        entryFields.querySelectorAll('input[name="symptoms"]').forEach((input) => { input.checked = value.includes(input.value); });
        return;
      }
      const control = entryFields.querySelector(`[name="${name}"]`);
      if (control && !Array.isArray(value)) control.value = value;
    });
  }

  function showEntryForm(type, entry) {
    state.editingId = entry ? entry.id : null;
    state.detailId = null;
    byId("dialog-title").textContent = entry ? "Edit entry" : "Add an entry";
    byId("dialog-eyebrow").textContent = entry ? "UPDATE YOUR JOURNAL" : "YOUR PRIVATE JOURNAL";
    entryDetails.hidden = true;
    entryForm.hidden = false;
    entryTypeInput.disabled = false;
    entryForm.reset();
    dialogError.hidden = true;
    byId("dialog-message").hidden = true;
    entryTypeInput.value = type || (entry && entry.type) || "period";
    entryDateInput.value = entry ? entry.date : state.selectedDate;
    buildFields(entryTypeInput.value, entry ? entry.data : {});
    if (!dialog.open) dialog.showModal();
    entryTypeInput.focus();
  }

  function showEntryDetails(entry) {
    if (!entry) return;
    state.detailId = entry.id;
    state.editingId = null;
    byId("dialog-title").textContent = entry.data.title || typeTitles[entry.type];
    byId("dialog-eyebrow").textContent = typeLabels[entry.type].toUpperCase() + " ENTRY";
    entryForm.hidden = true;
    entryDetails.hidden = false;
    entryDetails.replaceChildren();
    const content = document.createElement("div");
    content.className = "detail-content";
    const date = document.createElement("p");
    date.className = "detail-date";
    date.textContent = formatDate(entry.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const description = document.createElement("dl");
    Object.entries(entry.data).forEach(([key, value]) => {
      if (value === "" || value == null || (Array.isArray(value) && !value.length)) return;
      const term = document.createElement("dt");
      term.textContent = ({
        endDate: "Period ended", flow: "Flow", cramps: "Cramps", symptoms: "Symptoms", severity: "Severity",
        duration: "Duration", mood: "Mood", hours: "Hours slept", quality: "Sleep quality",
        activity: "Activity", meals: "Meals", habits: "Habits", glasses: "Water (glasses)",
        title: "Title", content: "Note", notes: "Notes"
      })[key] || key;
      const detail = document.createElement("dd");
      detail.textContent = Array.isArray(value) ? value.join(", ") : String(value);
      description.append(term, detail);
    });
    content.append(date, description);
    const actions = document.createElement("div");
    actions.className = "detail-actions";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "button button-outline delete-entry-button";
    deleteButton.dataset.deleteEntry = entry.id;
    deleteButton.textContent = "Delete";
    const controls = document.createElement("div");
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "button button-outline";
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => dialog.close());
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "button button-primary";
    editButton.textContent = "Edit entry";
    editButton.addEventListener("click", () => showEntryForm(entry.type, entry));
    deleteButton.addEventListener("click", () => deleteEntry(entry.id));
    controls.append(closeButton, editButton);
    actions.append(deleteButton, controls);
    entryDetails.append(content, actions);
    if (!dialog.open) dialog.showModal();
    closeButton.focus();
  }

  function readFormData(type) {
    const formData = new FormData(entryForm);
    const data = {};
    if (type === "period") {
      data.endDate = String(formData.get("endDate") || "");
      data.flow = String(formData.get("flow") || "");
      data.cramps = String(formData.get("cramps") || "");
      data.notes = String(formData.get("notes") || "").trim();
    } else if (type === "symptoms") {
      data.symptoms = formData.getAll("symptoms").map(String);
      data.severity = String(formData.get("severity") || "");
      data.duration = String(formData.get("duration") || "");
      data.notes = String(formData.get("notes") || "").trim();
    } else if (type === "mood") {
      data.mood = String(formData.get("mood") || "");
      data.notes = String(formData.get("notes") || "").trim();
    } else if (type === "sleep") {
      data.hours = String(formData.get("hours") || "");
      data.quality = String(formData.get("quality") || "");
      data.notes = String(formData.get("notes") || "").trim();
    } else if (type === "lifestyle") {
      data.activity = String(formData.get("activity") || "").trim();
      data.meals = String(formData.get("meals") || "").trim();
      data.habits = String(formData.get("habits") || "").trim();
      data.notes = String(formData.get("notes") || "").trim();
    } else if (type === "water") {
      data.glasses = String(formData.get("glasses") || "");
    } else {
      data.title = String(formData.get("title") || "").trim();
      data.content = String(formData.get("content") || "").trim();
    }
    return data;
  }

  function validateEntry(type, date, data) {
    if (!parseDate(date)) return "Choose a valid date for this entry.";
    if (type === "period" && data.endDate) {
      const endDate = parseDate(data.endDate);
      if (!endDate || endDate < parseDate(date)) return "The period end date must be on or after its start date.";
      if (daysBetween(parseDate(date), endDate) > 30) return "Please check the period end date; it is more than 30 days after the start date.";
    }
    if (type === "symptoms" && data.symptoms.length === 0) return "Select at least one symptom to save this entry.";
    if (type === "lifestyle" && !data.activity && !data.meals && !data.habits && !data.notes) return "Add at least one lifestyle detail.";
    if (type === "sleep" && (data.hours === "" || Number(data.hours) < 0 || Number(data.hours) > 24)) return "Enter sleep hours from 0 to 24.";
    if (type === "water" && (data.glasses === "" || Number(data.glasses) < 0 || Number(data.glasses) > 100)) return "Enter a water amount from 0 to 100 glasses.";
    if (type === "mood" && !data.mood) return "Choose a mood before saving.";
    if (type === "notes" && (!data.title || !data.content)) return "Add both a title and note before saving.";
    return "";
  }

  function saveEntry(event) {
    event.preventDefault();
    const type = entryTypeInput.value;
    const date = entryDateInput.value;
    const data = readFormData(type);
    const error = validateEntry(type, date, data);
    if (error) {
      dialogError.textContent = error;
      dialogError.hidden = false;
      return;
    }
    dialogError.hidden = true;
    const now = new Date().toISOString();
    const index = state.entries.findIndex((entry) => entry.id === state.editingId);
    const old = index >= 0 ? state.entries[index] : null;
    const entry = {
      id: old ? old.id : (globalThis.crypto && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`),
      type,
      date,
      data,
      createdAt: old ? old.createdAt : now,
      updatedAt: now
    };
    if (index >= 0) state.entries[index] = entry;
    else state.entries.push(entry);
    state.selectedDate = date;
    const selected = parseDate(date);
    state.displayedMonth = new Date(selected.getFullYear(), selected.getMonth(), 1);
    const persisted = persistEntries();
    renderAll();
    dialog.close();
    if (persisted) showToast(old ? "Your journal entry was updated." : "Your journal entry was added.");
  }

  function deleteEntry(id) {
    const entry = state.entries.find((item) => item.id === id);
    if (!entry) return;
    if (!window.confirm(`Delete this ${typeLabels[entry.type].toLowerCase()} entry? This cannot be undone.`)) return;
    state.entries = state.entries.filter((item) => item.id !== id);
    const persisted = persistEntries();
    renderAll();
    dialog.close();
    if (persisted) showToast("The entry was deleted.");
  }

  function renderAll() {
    renderCalendar();
    renderCheckin();
    renderRecentEntries();
    renderInsights();
  }

  byId("journal-language").addEventListener("change", (event) => {
    if (event.target.value === "kn") {
      showToast("Kannada is available on the main Yajnaseni page. This Journal view is currently in English.");
    }
  });
  byId("journal-menu-toggle").addEventListener("click", () => {
    const button = byId("journal-menu-toggle");
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
    byId("journal-header-menu").classList.toggle("is-open", !open);
  });
  const resources = byId("journal-resources");
  const resourcesTrigger = byId("journal-resources-trigger");
  const resourcesMenu = byId("journal-resources-menu");
  function setResourcesOpen(open) {
    resourcesTrigger.setAttribute("aria-expanded", String(open));
    resourcesMenu.hidden = !open;
  }
  resources.addEventListener("pointerenter", () => setResourcesOpen(true));
  resources.addEventListener("pointerleave", () => setResourcesOpen(false));
  resources.addEventListener("focusin", () => setResourcesOpen(true));
  resources.addEventListener("focusout", (event) => { if (!resources.contains(event.relatedTarget)) setResourcesOpen(false); });
  resourcesTrigger.addEventListener("click", () => setResourcesOpen(resourcesMenu.hidden));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setResourcesOpen(false);
      const menuToggle = byId("journal-menu-toggle");
      if (menuToggle.getAttribute("aria-expanded") === "true") {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        byId("journal-header-menu").classList.remove("is-open");
        menuToggle.focus();
      }
    }
  });
  document.addEventListener("click", (event) => {
    if (!resources.contains(event.target)) setResourcesOpen(false);
    const menuToggle = byId("journal-menu-toggle");
    if (!byId("journal-header-menu").contains(event.target) && !menuToggle.contains(event.target)) {
      byId("journal-header-menu").classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
  byId("journal-header-menu").querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    byId("journal-header-menu").classList.remove("is-open");
    byId("journal-menu-toggle").setAttribute("aria-expanded", "false");
    setResourcesOpen(false);
  }));
  document.querySelectorAll(".journal-tab").forEach((tab) => {
    tab.querySelector(".tab-icon").innerHTML = typeIcons[tab.dataset.view];
    tab.addEventListener("click", () => setView(tab.dataset.view));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const tabs = [...document.querySelectorAll(".journal-tab")];
      const current = tabs.indexOf(tab);
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1
        : (current + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
      tabs[next].focus();
      setView(tabs[next].dataset.view);
    });
  });
  byId("previous-month").addEventListener("click", () => {
    state.displayedMonth = new Date(state.displayedMonth.getFullYear(), state.displayedMonth.getMonth() - 1, 1);
    renderCalendar();
  });
  byId("next-month").addEventListener("click", () => {
    state.displayedMonth = new Date(state.displayedMonth.getFullYear(), state.displayedMonth.getMonth() + 1, 1);
    renderCalendar();
  });
  byId("calendar-days").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-date]");
    if (!button) return;
    state.selectedDate = button.dataset.date;
    const selected = parseDate(state.selectedDate);
    state.displayedMonth = new Date(selected.getFullYear(), selected.getMonth(), 1);
    renderCalendar();
  });
  byId("log-period").addEventListener("click", () => showEntryForm("period"));
  byId("add-entry").addEventListener("click", () => showEntryForm("period"));
  byId("checkin-grid").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-checkin-type]");
    if (button) showEntryForm(button.dataset.checkinType);
  });
  byId("recent-entries").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-entry]");
    if (!button) return;
    showEntryDetails(state.entries.find((entry) => entry.id === button.dataset.openEntry));
  });
  byId("view-all").addEventListener("click", () => {
    state.showAllEntries = !state.showAllEntries;
    renderRecentEntries();
  });
  byId("insight-range").addEventListener("change", renderCycleChart);
  entryTypeInput.addEventListener("change", () => buildFields(entryTypeInput.value, {}));
  entryForm.addEventListener("submit", saveEntry);
  byId("close-dialog").addEventListener("click", () => dialog.close());
  byId("cancel-entry").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  state.entries = safeStoredEntries();
  setView("overview");
  renderAll();
})();
