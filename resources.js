(() => {
  "use strict";

  const topics = [
    { id: "menstrual-health", label: "Menstrual Health", description: "Periods and cycle care", icon: "cycle" },
    { id: "feminine-health", label: "Feminine Health", description: "Body changes and care", icon: "flower" },
    { id: "mental-wellbeing", label: "Mental Wellbeing", description: "Mood and emotional health", icon: "mind" },
    { id: "medical-conditions", label: "Medical Conditions", description: "Understand health topics", icon: "care" },
    { id: "self-care", label: "Self Care", description: "Everyday habits and nutrition", icon: "leaf" },
    { id: "nutrition", label: "Diet & Nutrition", description: "Nourishment and wellbeing", icon: "nutrition" }
  ];

  const topicIcons = {
    cycle: '<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3 2m4-8 2-2m-2 2 2 2M5 6 3 4m2 2L3 8"></path>',
    flower: '<path d="M12 12c-4-1-5-5-2-7 2-1 3 1 2 4 1-3 2-5 4-4 3 2 1 6-4 7Zm0 0c1-4 5-5 7-2 1 2-1 3-4 2 3 1 5 2 4 4-2 3-6 1-7-4Zm0 0c4 1 5 5 2 7-2 1-3-1-2-4-1 3-2 5-4 4-3-2-1-6 4-7Zm0 0c-1 4-5 5-7 2-1-2 1-3 4-2-3-1-5-2-4-4 2-3 6-1 7 4Z"></path><circle cx="12" cy="12" r="1"></circle>',
    mind: '<path d="M9 19h6m-5 3h4m-2-19a7 7 0 0 0-4 12.7c.7.5 1 1.1 1 2.3h4c0-1.2.3-1.8 1-2.3A7 7 0 0 0 12 3Z"></path><path d="M9.5 10a2.5 2.5 0 0 1 5 0c0 1.5-2.5 1.5-2.5 3"></path>',
    care: '<path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z"></path><path d="M12 9v6m-3-3h6"></path>',
    leaf: '<path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-7 10-16Z"></path><path d="M5 20c3-5 6-8 12-12"></path>',
    nutrition: '<path d="M12 21c-4.5 0-7-3.4-7-8.5C5 7 8.4 5 12 8c3.6-3 7-1 7 4.5 0 5.1-2.5 8.5-7 8.5Z"></path><path d="M12 21c0-5 0-8 3-11M12 7c0-2 1-3.5 3.5-4"></path>'
  };

  const articles = [
    {
      id: "common-symptoms",
      title: "Understanding Common Women’s Health Symptoms",
      summary: "A thoughtful starting point for noticing changes and deciding what to discuss with a clinician.",
      topic: "Feminine Health",
      topicId: "feminine-health",
      tags: ["medical-conditions", "menstrual-health"],
      section: ["health-resources"],
      readTime: "5 min read",
      art: "journal",
      image: "image/Symptoms.avif?v=20261018-symptoms",
      keywords: "symptoms body changes health signs",
      lead: "Symptoms can be useful clues about how your body is doing, but one symptom on its own rarely explains what is happening. Keeping a clear record can help you describe changes during a healthcare visit.",
      sections: [
        { heading: "Notice what is changing", paragraphs: ["Write down what you feel, when it began, how often it happens, and whether anything makes it better or worse. Note where you are in your menstrual cycle when that information is relevant.", "Use your own words rather than trying to name a condition. Include changes in your usual routine, medicines, or health history if they seem relevant to the conversation."] },
        { heading: "When to ask for support", paragraphs: ["Consider speaking with a qualified healthcare professional about symptoms that persist, recur, interfere with daily life, or feel unusual for you. Seek urgent local medical care for sudden, severe, or rapidly worsening symptoms."] }
      ],
      sources: [{ label: "Office on Women’s Health — Your menstrual cycle", url: "https://womenshealth.gov/menstrual-cycle" }, { label: "NHS — Getting medical help", url: "https://www.nhs.uk/nhs-services/gps/how-to-access-gp-services/" }]
    },
    {
      id: "period-tracking",
      title: "A Gentle Guide to Period Tracking",
      summary: "Learn what to note about your cycle and how tracking can support a useful conversation.",
      topic: "Menstrual Health",
      topicId: "menstrual-health",
      tags: ["feminine-health", "self-care"],
      section: ["health-resources"],
      readTime: "4 min read",
      art: "cycle",
      image: "image/Periods.avif",
      keywords: "menstrual period cycle dates bleeding cramps diary",
      lead: "A period record can help you understand your own patterns over time. Cycles vary, and tracking is for learning about your body—not for diagnosing a health condition.",
      sections: [
        { heading: "What you might record", paragraphs: ["Note the first day of bleeding, how long bleeding lasts, and any changes in flow or discomfort. You can also record symptoms, mood, or how symptoms affect your day.", "Use a calendar or private journal that feels comfortable. A few consistent notes are often more useful than trying to record every detail."] },
        { heading: "Patterns are not predictions", paragraphs: ["Cycle-based estimates can be inaccurate, including estimates of ovulation or fertile days. Do not rely on a period tracker as contraception. If your periods change significantly or concern you, discuss the changes with a clinician."] }
      ],
      sources: [{ label: "Office on Women’s Health — Your menstrual cycle", url: "https://womenshealth.gov/menstrual-cycle" }, { label: "ACOG — The menstrual cycle", url: "https://www.acog.org/womens-health/faqs/your-menstrual-cycle" }]
    },
    {
      id: "when-to-see-a-doctor",
      title: "When to Talk With a Healthcare Professional",
      summary: "A reassuring guide to seeking help for new, persistent, or concerning changes.",
      topic: "Medical Conditions",
      topicId: "medical-conditions",
      tags: ["feminine-health", "mental-wellbeing"],
      section: ["health-resources"],
      readTime: "4 min read",
      art: "care",
      image: "image/Healthcare.avif",
      keywords: "doctor appointment urgent severe pain bleeding help care",
      lead: "You do not need to be certain that something is wrong before asking for medical advice. A clinician can listen to your concerns, ask questions, and help decide what care may be useful.",
      sections: [
        { heading: "Prepare for an appointment", paragraphs: ["Bring a short list of what has changed, when it started, how often it happens, and any questions you have. A trusted person may accompany you if you wish.", "If you use a journal or symptom tracker, share only what you feel comfortable sharing. You can ask how your information will be handled."] },
        { heading: "Get urgent help when needed", paragraphs: ["Seek urgent local medical care for sudden severe pain, very heavy bleeding, fainting, difficulty breathing, or another symptom that feels immediately dangerous. This general guide cannot assess an emergency."] }
      ],
      sources: [{ label: "NHS — When to use NHS 111", url: "https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-use-111/" }, { label: "MedlinePlus — Talking with your doctor", url: "https://medlineplus.gov/ency/patientinstructions/000456.htm" }]
    },
    {
      id: "myth-vs-fact",
      title: "Women’s Health: Myth vs. Fact",
      summary: "A few calm reminders for questioning common health claims and finding trustworthy information.",
      topic: "Health Literacy",
      topicId: "medical-conditions",
      tags: ["self-care", "feminine-health"],
      section: ["health-resources"],
      readTime: "5 min read",
      art: "leaf",
      keywords: "myth fact misinformation reliable sources health claims",
      lead: "Health advice can travel quickly online, but confident wording does not make a claim reliable. Look for sources that explain where information comes from and when it was reviewed.",
      sections: [
        { heading: "A symptom is not a diagnosis", paragraphs: ["Many different factors can contribute to the same symptom. Only an appropriately qualified professional can assess your individual health; online checklists cannot confirm a condition.", "Be cautious of claims that promise a quick cure, discourage necessary care, or present a single food or supplement as a solution for everyone."] },
        { heading: "Check the source", paragraphs: ["Prefer public health agencies, professional medical organisations, and established health services. Check publication dates, references, and whether the advice acknowledges uncertainty and individual differences."] }
      ],
      sources: [{ label: "WHO — Health topics", url: "https://www.who.int/health-topics" }, { label: "MedlinePlus — Evaluating health information", url: "https://medlineplus.gov/evaluatinghealthinformation.html" }]
    },
    {
      id: "nourishment-basics",
      title: "Everyday Nourishment for Wellbeing",
      summary: "Simple, flexible ideas for building balanced meals without strict rules or promises.",
      topic: "Diet & Nutrition",
      topicId: "nutrition",
      tags: ["self-care", "feminine-health"],
      section: ["diet-nutrition"],
      readTime: "5 min read",
      art: "nutrition",
      image: "image/Food.avif",
      keywords: "diet nutrition food balanced meals nourishment hydration",
      lead: "Eating well does not have to mean following a rigid plan. A varied pattern of foods that fits your culture, needs, preferences, and budget can support general wellbeing.",
      sections: [
        { heading: "Aim for variety, not perfection", paragraphs: ["When available, include a mix of vegetables or fruit, grains or other staple foods, and protein sources. There is no single ideal meal that works for everyone.", "Drink according to your needs and local health advice. Needs can differ with activity, climate, medicines, and health conditions."] },
        { heading: "Choose advice that fits you", paragraphs: ["Be wary of restrictive diets or supplements promoted as cures for menstrual or hormonal symptoms. If you have a health condition, are pregnant, or have questions about nutrition, seek advice from a qualified professional."] }
      ],
      sources: [{ label: "WHO — Healthy diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }, { label: "NHS — The Eatwell Guide", url: "https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/the-eatwell-guide/" }]
    },
    {
      id: "iron-and-food",
      title: "Iron, Food and Everyday Health",
      summary: "An introductory look at iron in food and when to ask about possible deficiency.",
      topic: "Diet & Nutrition",
      topicId: "nutrition",
      tags: ["self-care", "menstrual-health", "medical-conditions"],
      section: ["diet-nutrition"],
      readTime: "4 min read",
      art: "nutrition",
      image: "image/Iron.avif",
      keywords: "iron food fatigue deficiency heavy periods nutrition",
      lead: "Iron is an essential nutrient, and people have different needs. Tiredness has many possible causes, so it is not possible to tell from fatigue alone whether someone has low iron.",
      sections: [
        { heading: "Food sources and absorption", paragraphs: ["Iron is found in a range of foods, including meat and seafood, beans and lentils, tofu, and some fortified foods. Vitamin C-containing foods alongside plant sources can help the body absorb iron.", "A varied diet may support nutrient intake, but food advice is not a substitute for assessment when you have symptoms or concerns."] },
        { heading: "Ask before taking supplements", paragraphs: ["Taking iron when it is not needed can be harmful. A healthcare professional can advise whether testing or treatment is appropriate, especially if you have heavy periods, ongoing fatigue, or another health condition."] }
      ],
      sources: [{ label: "NHS — Iron", url: "https://www.nhs.uk/conditions/vitamins-and-minerals/iron/" }, { label: "NIH Office of Dietary Supplements — Iron", url: "https://ods.od.nih.gov/factsheets/Iron-Consumer/" }]
    },
    {
      id: "movement-and-rest",
      title: "Making Space for Movement and Rest",
      summary: "A gentle, adaptable approach to everyday movement, recovery, and rest.",
      topic: "Self Care",
      topicId: "self-care",
      tags: ["mental-wellbeing", "nutrition"],
      section: ["lifestyle-wellness"],
      readTime: "4 min read",
      art: "leaf",
      image: "image/Rest.avif",
      keywords: "movement exercise rest activity habits wellness",
      lead: "Movement and rest can both be part of looking after yourself. What feels manageable is personal and may change with health, energy, disability, and daily responsibilities.",
      sections: [
        { heading: "Start with what feels doable", paragraphs: ["Choose an activity that feels accessible and enjoyable, even if it is a short walk, stretching, or everyday movement. Rest when your body needs it and adjust plans without guilt.", "If activity causes pain, dizziness, or other concerning symptoms, stop and seek appropriate medical advice."] },
        { heading: "Build supportive routines", paragraphs: ["Small, repeatable habits can be easier to maintain than all-or-nothing goals. Consider what helps you feel supported, such as a regular wind-down routine, time outdoors, or checking in with someone you trust."] }
      ],
      sources: [{ label: "WHO — Physical activity", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" }, { label: "NHS — Exercise", url: "https://www.nhs.uk/live-well/exercise/" }]
    },
    {
      id: "stress-and-mood",
      title: "Understanding Stress and Mood",
      summary: "Practical, non-judgmental ideas for noticing emotional changes and finding support.",
      topic: "Mental Wellbeing",
      topicId: "mental-wellbeing",
      tags: ["self-care", "feminine-health"],
      section: ["lifestyle-wellness"],
      readTime: "5 min read",
      art: "mood",
      image: "image/Stress.avif",
      keywords: "stress mood anxiety emotions mental wellbeing support",
      lead: "Everyone experiences changes in mood. Stress, life events, health, sleep, and many other factors may affect how you feel. You deserve support when emotional difficulties become hard to manage.",
      sections: [
        { heading: "Make a gentle check-in", paragraphs: ["If it feels helpful, note your mood, what was happening around you, and what offered comfort. Tracking is optional; you do not need to explain or justify your feelings.", "Small steps such as talking with someone you trust or making time for a calming activity may help some people, but these are not a replacement for professional care when you need it."] },
        { heading: "Reach out for support", paragraphs: ["Consider speaking with a healthcare or mental health professional if low mood, worry, or stress persists or interferes with daily life. If you may harm yourself or someone else, contact local emergency services or a crisis support service now."] }
      ],
      sources: [{ label: "WHO — Mental health", url: "https://www.who.int/health-topics/mental-health" }, { label: "NIMH — Caring for your mental health", url: "https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health" }]
    },
    {
      id: "sleep-routines",
      title: "Small Steps Toward Restful Sleep",
      summary: "Explore calm, realistic routines that may support sleep and recovery.",
      topic: "Lifestyle & Wellness",
      topicId: "self-care",
      tags: ["mental-wellbeing", "nutrition"],
      section: ["lifestyle-wellness"],
      readTime: "4 min read",
      art: "mood",
      image: "image/Sleep.avif",
      keywords: "sleep rest routine insomnia tired energy",
      lead: "Sleep needs and routines vary. A few simple changes may help some people, but persistent sleep difficulties can have many causes and deserve attention.",
      sections: [
        { heading: "Try a steady wind-down", paragraphs: ["If practical, keep a regular time to wind down and make your sleep space comfortable. A calming activity before bed may help you transition toward rest.", "If you are awake for a while, a quiet, relaxing activity may feel better than worrying about the clock. Adapt any routine to your circumstances and needs."] },
        { heading: "When to seek advice", paragraphs: ["Talk with a healthcare professional if sleep problems continue, affect your daily life, or occur with other concerns. Do not start or stop medicines for sleep without appropriate professional guidance."] }
      ],
      sources: [{ label: "NHS — Insomnia", url: "https://www.nhs.uk/conditions/insomnia/" }, { label: "CDC — About sleep", url: "https://www.cdc.gov/sleep/about/index.html" }]
    }
  ];

  const sections = {
    "health-resources": { label: "Health Resources", title: "Featured Articles" },
    "diet-nutrition": { label: "Diet and Nutrition", title: "Diet & Nutrition Articles" },
    "lifestyle-wellness": { label: "Lifestyle and Wellness", title: "Lifestyle & Wellness Articles" }
  };
  const iconHtml = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"></path></svg>',
    time: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>',
    article: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h7m-7 4h7"></path></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11Z"></path></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h6a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H4zM20 5.5h-4a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h4z"></path></svg>'
  };

  const state = {
    section: "health-resources",
    topic: "all",
    query: "",
    showAll: false,
    returnHash: "#health-resources"
  };
  const byId = (id) => document.getElementById(id);
  const searchInput = byId("resource-search");
  const clearSearch = byId("clear-resource-search");
  const topicFilters = byId("topic-filters");
  const topicCards = byId("topic-cards");
  const articleGrid = byId("article-grid");
  const emptyState = byId("resource-empty");
  const status = byId("resource-status");
  const featuredTitle = byId("featured-title");
  const viewAllButton = byId("view-all-articles");
  const layout = document.querySelector(".resources-layout");
  const toolbar = document.querySelector(".resources-toolbar");
  const detail = byId("article-detail");
  const detailContent = byId("article-detail-content");
  const heroArt = document.querySelector(".resources-art-window");
  const heroImage = heroArt.querySelector("img");
  const mobileToggle = byId("resources-menu-toggle");
  const headerMenu = byId("resources-header-menu");
  const dropdown = byId("resources-dropdown");
  const dropdownToggle = byId("resources-trigger");
  const dropdownMenu = byId("resources-menu");

  function normalize(value) {
    return String(value || "").toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function makeSvg(markup, className) {
    const holder = document.createElement("span");
    holder.className = className;
    holder.setAttribute("aria-hidden", "true");
    holder.innerHTML = markup;
    return holder;
  }

  function createNutritionIllustration(className) {
    const wrap = document.createElement("div");
    wrap.className = className;
    wrap.setAttribute("aria-hidden", "true");
    wrap.innerHTML = '<svg class="nutrition-illustration" viewBox="0 0 180 90"><ellipse class="plate" cx="90" cy="48" rx="54" ry="31"></ellipse><ellipse cx="90" cy="48" rx="43" ry="23" fill="none" stroke="#D9A8A0" stroke-width="1.5"></ellipse><path class="leaf" d="M60 48c2-13 12-17 23-13-1 12-9 19-23 13Zm11 8c4-11 14-13 24-7-4 11-13 14-24 7Z"></path><circle class="tomato" cx="104" cy="43" r="9"></circle><circle cx="104" cy="43" r="3" fill="#F2C3A9"></circle><path class="grain" d="M119 56c-9-5-11-13-5-19 10 3 13 11 5 19Zm-2-3 4-9"></path><path d="M83 36c5-6 10-6 14-2m-12 2 7 4" fill="none"></path></svg>';
    return wrap;
  }

  function articleMatches(article) {
    const sectionMatch = article.section.includes(state.section);
    const topicMatch = state.topic === "all" || article.topicId === state.topic || article.tags.includes(state.topic);
    const searchText = normalize([article.title, article.summary, article.topic, article.keywords, ...article.tags].join(" "));
    const searchMatch = !state.query || searchText.includes(normalize(state.query));
    return sectionMatch && topicMatch && searchMatch;
  }

  function renderTopics() {
    topicFilters.replaceChildren();
    const filterOptions = [{ id: "all", label: "All Topics" }, ...topics.map(({ id, label }) => ({ id, label }))];
    filterOptions.forEach((topic) => {
      const button = makeElement("button", `topic-filter${state.topic === topic.id ? " is-active" : ""}`, topic.label);
      button.type = "button";
      button.dataset.topic = topic.id;
      button.setAttribute("aria-pressed", String(state.topic === topic.id));
      topicFilters.append(button);
    });

    topicCards.replaceChildren();
    topics.forEach((topic) => {
      const button = makeElement("button", `topic-card${state.topic === topic.id ? " is-selected" : ""}`);
      button.type = "button";
      button.dataset.topic = topic.id;
      button.setAttribute("aria-pressed", String(state.topic === topic.id));
      button.append(makeSvg(`<svg viewBox="0 0 24 24">${topicIcons[topic.icon]}</svg>`, "topic-card-icon"));
      button.append(makeElement("span", "topic-card-title", topic.label));
      button.append(makeElement("span", "topic-card-description", topic.description));
      const count = articles.filter((article) => article.topicId === topic.id || article.tags.includes(topic.id)).length;
      button.append(makeElement("span", "topic-card-label", `${count} ${count === 1 ? "article" : "articles"}`));
      topicCards.append(button);
    });
  }

  function makeArticleArt(article) {
    if (article.art === "nutrition" && !article.image) return createNutritionIllustration("article-art nutrition-art");
    const art = makeElement("div", `article-art ${article.art}-art`);
    const image = document.createElement("img");
    image.src = new URL(article.image || (article.art === "leaf" ? "botanical.svg" : "image/Journal.png"), document.baseURI).href;
    image.alt = "";
    image.loading = "lazy";
    image.setAttribute("aria-hidden", "true");
    art.append(image);
    return art;
  }

  function renderArticles() {
    const matches = articles.filter(articleMatches);
    const visible = state.showAll ? matches : matches.slice(0, 3);
    articleGrid.replaceChildren();
    visible.forEach((article) => {
      const card = makeElement("article", "article-card");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Read ${article.title}`);
      card.dataset.article = article.id;
      card.append(makeArticleArt(article));

      const body = makeElement("div", "article-card-body");
      body.append(makeElement("span", "article-topic-badge", article.topic));
      body.append(makeElement("h3", "", article.title));
      body.append(makeElement("p", "", article.summary));
      const meta = makeElement("span", "article-meta");
      meta.append(makeSvg(iconHtml.time, "article-time-icon"));
      meta.append(document.createTextNode(article.readTime));
      const open = makeElement("span", "article-open", "→");
      open.setAttribute("aria-hidden", "true");
      meta.append(open);
      body.append(meta);
      card.append(body);
      articleGrid.append(card);
    });

    emptyState.hidden = matches.length > 0;
    articleGrid.hidden = matches.length === 0;
    viewAllButton.hidden = matches.length <= 3 && !state.showAll;
    viewAllButton.textContent = state.showAll ? "Show less ←" : "View all →";
    featuredTitle.textContent = sections[state.section].title;
    const topicName = state.topic === "all" ? "" : ` in ${topics.find((topic) => topic.id === state.topic)?.label || "this topic"}`;
    const searchName = state.query ? ` matching “${state.query}”` : "";
    status.textContent = `${matches.length} ${matches.length === 1 ? "article" : "articles"}${topicName}${searchName}`;
  }

  function renderTabs() {
    const isMainSection = state.section === "health-resources";
    const isDietSection = state.section === "diet-nutrition";
    const heroSource = isMainSection || isDietSection || state.section === "lifestyle-wellness"
      ? "image/Health.avif"
      : "image/Journal.png";
    heroArt.classList.toggle("is-main-hero", isMainSection);
    heroArt.classList.toggle("is-diet-hero", isDietSection);
    if (heroImage.getAttribute("src") !== heroSource) heroImage.setAttribute("src", heroSource);

    document.querySelectorAll(".resource-tab").forEach((tab) => {
      const active = tab.dataset.section === state.section;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-current", active ? "page" : "false");
    });
  }

  function render() {
    renderTabs();
    renderTopics();
    renderArticles();
    clearSearch.hidden = !state.query;
    if (searchInput.value !== state.query) searchInput.value = state.query;
  }

  function createArticleDetail(article) {
    detailContent.replaceChildren();
    const card = makeElement("div", "article-detail-card");
    const art = makeElement("div", `article-detail-art ${article.art}-art`);
    if (article.art === "nutrition" && !article.image) {
      art.append(createNutritionIllustration(""));
    } else {
      const image = document.createElement("img");
      image.src = new URL(article.image || (article.art === "leaf" ? "botanical.svg" : "image/Journal.png"), document.baseURI).href;
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      art.append(image);
    }
    card.append(art);

    const copy = makeElement("div", "article-detail-copy");
    const meta = makeElement("div", "article-detail-meta");
    meta.append(makeElement("span", "article-topic-badge", article.topic));
    meta.append(makeSvg(iconHtml.time, "article-time-icon"));
    meta.append(makeElement("span", "article-meta-text", article.readTime));
    copy.append(meta);
    copy.append(makeElement("h1", "", article.title));
    copy.append(makeElement("p", "article-detail-lede", article.lead));

    article.sections.forEach((section) => {
      copy.append(makeElement("h2", "", section.heading));
      section.paragraphs.forEach((paragraph) => copy.append(makeElement("p", "", paragraph)));
    });

    const sourceBlock = makeElement("section", "article-sources");
    sourceBlock.append(makeElement("h2", "", "Further reading"));
    const sourceList = document.createElement("ul");
    article.sources.forEach((source) => {
      const item = document.createElement("li");
      const link = makeElement("a", "", source.label);
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      item.append(link);
      sourceList.append(item);
    });
    sourceBlock.append(sourceList);
    copy.append(sourceBlock);
    card.append(copy);
    detailContent.append(card);
  }

  function showArticle(id, updateHash) {
    const article = articles.find((item) => item.id === id);
    if (!article) return false;
    if (!detail.hidden) state.returnHash = `#${state.section}`;
    else state.returnHash = window.location.hash || `#${state.section}`;
    state.section = article.section[0];
    state.topic = "all";
    state.query = "";
    state.showAll = false;
    render();
    createArticleDetail(article);
    layout.hidden = true;
    toolbar.hidden = true;
    detail.hidden = false;
    if (updateHash && window.location.hash !== `#article-${article.id}`) {
      window.location.hash = `article-${article.id}`;
    }
    byId("back-to-resources").focus();
    return true;
  }

  function hideArticle() {
    detail.hidden = true;
    layout.hidden = false;
    toolbar.hidden = false;
    render();
  }

  function setSection(section, updateHash) {
    if (!sections[section]) return;
    state.section = section;
    state.topic = "all";
    state.showAll = false;
    hideArticle();
    render();
    if (updateHash && window.location.hash !== `#${section}`) window.location.hash = section;
  }

  function applyHash() {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash.startsWith("article-")) {
      showArticle(hash.slice("article-".length), false);
      return;
    }
    if (sections[hash]) {
      setSection(hash, false);
      return;
    }
    if (!hash) setSection("health-resources", false);
  }

  function closeMenu() {
    headerMenu.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileToggle.setAttribute("aria-label", "Open navigation menu");
  }

  function setDropdownOpen(open) {
    dropdownToggle.setAttribute("aria-expanded", String(open));
    dropdownMenu.hidden = !open;
  }

  topicFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic]");
    if (!button) return;
    state.topic = button.dataset.topic;
    state.showAll = false;
    render();
  });

  topicCards.addEventListener("click", (event) => {
    const button = event.target.closest(".topic-card");
    if (!button) return;
    state.topic = button.dataset.topic;
    state.showAll = false;
    render();
    byId("featured-articles").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    state.showAll = false;
    render();
    searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
  });

  clearSearch.addEventListener("click", () => {
    state.query = "";
    searchInput.value = "";
    state.showAll = false;
    render();
    searchInput.focus();
  });

  byId("reset-resource-filters").addEventListener("click", () => {
    state.topic = "all";
    state.query = "";
    state.showAll = false;
    render();
    searchInput.focus();
  });

  viewAllButton.addEventListener("click", () => {
    state.showAll = !state.showAll;
    renderArticles();
  });

  articleGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-article]");
    if (card) showArticle(card.dataset.article, true);
  });

  articleGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest("[data-article]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      showArticle(card.dataset.article, true);
    }
  });

  document.querySelector(".resource-tabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-section]");
    if (!tab) return;
    event.preventDefault();
    state.returnHash = `#${tab.dataset.section}`;
    setSection(tab.dataset.section, true);
  });

  document.querySelector(".quick-links-list").addEventListener("click", (event) => {
    const link = event.target.closest("[data-article]");
    if (!link) return;
    event.preventDefault();
    showArticle(link.dataset.article, true);
  });

  byId("back-to-resources").addEventListener("click", () => {
    const returnHash = state.returnHash || `#${state.section}`;
    hideArticle();
    if (window.location.hash !== returnHash) window.location.hash = returnHash.slice(1);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("hashchange", applyHash);

  mobileToggle.addEventListener("click", () => {
    const open = !headerMenu.classList.contains("is-open");
    headerMenu.classList.toggle("is-open", open);
    mobileToggle.setAttribute("aria-expanded", String(open));
    mobileToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    if (!open) setDropdownOpen(false);
  });

  dropdownToggle.addEventListener("click", () => {
    setDropdownOpen(dropdownToggle.getAttribute("aria-expanded") !== "true");
  });

  dropdown.addEventListener("mouseenter", () => setDropdownOpen(true));
  dropdown.addEventListener("mouseleave", () => {
    if (!dropdown.contains(document.activeElement)) setDropdownOpen(false);
  });
  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) setDropdownOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setDropdownOpen(false);
    if (!headerMenu.contains(event.target) && !mobileToggle.contains(event.target)) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setDropdownOpen(false);
      closeMenu();
      if (!detail.hidden) byId("back-to-resources").focus();
    }
  });
  headerMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  render();
  applyHash();
})();
