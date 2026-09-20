(function () {
  const portfolioBtn = document.querySelector("[data-projects-portfolio]");
  const panel = document.querySelector("[data-project-panel]");
  const backdrop = document.querySelector("[data-project-backdrop]");
  const closeBtn = document.querySelector("[data-project-close]");
  if (!portfolioBtn || !panel || !backdrop || !closeBtn) return;

  const img = portfolioBtn.querySelector("img");
  const frontSrc = img && img.getAttribute("data-front-src");
  const sideSrc = img && img.getAttribute("data-side-src");
  let lastFocus = null;

  function showSide() {
    if (!img || !sideSrc) return;
    img.src = sideSrc;
  }

  function showFront() {
    if (!img || !frontSrc) return;
    img.src = frontSrc;
  }

  function openPanel() {
    lastFocus = document.activeElement;
    panel.hidden = false;
    backdrop.hidden = false;
    document.body.classList.add("is-project-panel-open");
    closeBtn.focus();
  }

  function closePanel() {
    if (panel.hidden) return;
    panel.hidden = true;
    backdrop.hidden = true;
    document.body.classList.remove("is-project-panel-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  portfolioBtn.addEventListener("mouseenter", showSide);
  portfolioBtn.addEventListener("mouseleave", showFront);
  portfolioBtn.addEventListener("focus", showSide);
  portfolioBtn.addEventListener("blur", showFront);

  portfolioBtn.addEventListener("click", openPanel);
  closeBtn.addEventListener("click", closePanel);
  backdrop.addEventListener("click", closePanel);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePanel();
  });
})();
