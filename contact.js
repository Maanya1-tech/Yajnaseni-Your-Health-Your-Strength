(() => {
  "use strict";

  const form = document.getElementById("provider-search-form");
  const locationInput = document.getElementById("doctor-location");
  const specialitySelect = document.getElementById("doctor-speciality");
  const locationButton = document.getElementById("use-my-location");
  const locationStatus = document.getElementById("location-status");
  const feedback = document.getElementById("search-feedback");
  const mapButton = document.getElementById("map-open-button");
  const mapsLink = document.getElementById("empty-maps-link");
  const chips = document.querySelector(".speciality-chips");
  const menuButton = document.getElementById("contact-menu-toggle");
  const headerMenu = document.getElementById("contact-header-menu");
  const dropdown = document.getElementById("contact-resources-dropdown");
  const dropdownButton = document.getElementById("contact-resources-trigger");
  const dropdownMenu = document.getElementById("contact-resources-menu");

  const specialityNames = {
    all: "women's health doctors and clinics",
    gynaecologist: "gynaecologist",
    dermatologist: "dermatologist",
    endocrinologist: "endocrinologist",
    "psychiatrist counsellor": "psychiatrist or counsellor",
    "general physician": "general physician",
    "women's health clinic": "women's health clinic"
  };
  let mapsUrl = createMapsUrl("women's health doctors and clinics", "");

  function createMapsUrl(speciality, location) {
    const searchTerms = [specialityNames[speciality] || specialityNames.all, location]
      .filter(Boolean)
      .join(" ");
    const query = encodeURIComponent(searchTerms).replace(/[!'()*]/g, (character) =>
      `%${character.charCodeAt(0).toString(16).toUpperCase()}`
    );
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  }

  function updateMapsLinks() {
    mapsUrl = createMapsUrl(specialitySelect.value, locationInput.value.trim());
    mapsLink.href = mapsUrl;
    return mapsUrl;
  }

  function showFeedback(message, isError) {
    feedback.textContent = message;
    feedback.classList.toggle("is-error", Boolean(isError));
    feedback.hidden = false;
  }

  function hideFeedback() {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.classList.remove("is-error");
  }

  function updateActiveChip(value) {
    chips.querySelectorAll("[data-speciality]").forEach((button) => {
      const active = button.dataset.speciality === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function openMaps() {
    const url = updateMapsLinks();
    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      showFeedback("Your browser blocked the new tab. Use the Google Maps link in the nearby-care panel instead.", true);
      mapsLink.focus();
      return false;
    }
    newWindow.opener = null;
    return true;
  }

  function closeMobileMenu() {
    headerMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
    setDropdown(false);
  }

  function setDropdown(open) {
    dropdownButton.setAttribute("aria-expanded", String(open));
    dropdownMenu.hidden = !open;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const location = locationInput.value.trim();
    if (!location) {
      showFeedback("Enter a city, area or PIN code, or choose Use My Location before searching.", true);
      locationInput.focus();
      return;
    }
    hideFeedback();
    updateMapsLinks();
    showFeedback("Opening Google Maps for real nearby listings. Yajnaseni does not display or verify live clinic results on this page.", false);
    openMaps();
  });

  locationInput.addEventListener("input", () => {
    updateMapsLinks();
    if (feedback.classList.contains("is-error")) hideFeedback();
  });

  specialitySelect.addEventListener("change", () => {
    updateActiveChip(specialitySelect.value);
    updateMapsLinks();
  });

  chips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-speciality]");
    if (!chip) return;
    specialitySelect.value = chip.dataset.speciality;
    updateActiveChip(chip.dataset.speciality);
    updateMapsLinks();
  });

  locationButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      locationStatus.textContent = "Location access is not available in this browser. You can enter a city or area instead.";
      locationInput.focus();
      return;
    }
    locationButton.disabled = true;
    locationStatus.textContent = "Requesting your location permission…";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        locationInput.value = `${position.coords.latitude.toFixed(5)}, ${position.coords.longitude.toFixed(5)}`;
        locationStatus.textContent = "Location added. Choose Find Doctors Near Me to search Google Maps.";
        updateMapsLinks();
        locationButton.disabled = false;
        hideFeedback();
      },
      (error) => {
        locationButton.disabled = false;
        if (error.code === error.PERMISSION_DENIED) {
          locationStatus.textContent = "Location permission was denied. You can still search by entering a city, area or PIN code.";
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          locationStatus.textContent = "Your location could not be determined. Please enter a city, area or PIN code to search.";
        } else if (error.code === error.TIMEOUT) {
          locationStatus.textContent = "Location request timed out. Please enter a city, area or PIN code to search.";
        } else {
          locationStatus.textContent = `Could not get your location: ${error.message || "please enter a city, area or PIN code instead."}`;
        }
        locationInput.focus();
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
    );
  });

  mapButton.addEventListener("click", () => {
    const location = locationInput.value.trim();
    if (!location) {
      showFeedback("Enter a location or choose Use My Location before opening a local map search.", true);
      locationInput.focus();
      return;
    }
    hideFeedback();
    openMaps();
  });

  mapsLink.addEventListener("click", (event) => {
    const location = locationInput.value.trim();
    if (!location) {
      event.preventDefault();
      showFeedback("Enter a location or choose Use My Location before searching Google Maps.", true);
      locationInput.focus();
      return;
    }
    mapsLink.href = updateMapsLinks();
  });

  menuButton.addEventListener("click", () => {
    const open = !headerMenu.classList.contains("is-open");
    headerMenu.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    if (!open) setDropdown(false);
  });

  dropdownButton.addEventListener("click", () => {
    setDropdown(dropdownButton.getAttribute("aria-expanded") !== "true");
  });
  dropdown.addEventListener("mouseenter", () => setDropdown(true));
  dropdown.addEventListener("mouseleave", () => {
    if (!dropdown.contains(document.activeElement)) setDropdown(false);
  });
  dropdown.addEventListener("focusout", (event) => {
    if (!dropdown.contains(event.relatedTarget)) setDropdown(false);
  });
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) setDropdown(false);
    if (!headerMenu.contains(event.target) && !menuButton.contains(event.target)) closeMobileMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setDropdown(false);
      closeMobileMenu();
    }
  });
  headerMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

  updateMapsLinks();
})();
