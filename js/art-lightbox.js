(function () {
  const grid = document.querySelector(".art-gallery__grid");
  const lightbox = document.querySelector("[data-art-lightbox]");
  if (!grid || !lightbox) return;

  const lightboxImg = lightbox.querySelector(".art-lightbox__img");
  const closeBtn = lightbox.querySelector(".art-lightbox__close");
  let lastFocus = null;

  function open(src, alt) {
    lastFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("is-lightbox-open");
    closeBtn.focus();
  }

  function close() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    lightboxImg.alt = "";
    document.body.classList.remove("is-lightbox-open");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  grid.addEventListener("click", (event) => {
    const btn = event.target.closest(".art-gallery__open");
    if (!btn || !grid.contains(btn)) return;
    const img = btn.querySelector("img");
    if (!img) return;
    open(img.currentSrc || img.src, img.alt);
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === closeBtn) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
})();
