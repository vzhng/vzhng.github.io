(function () {
  const stack = document.querySelector("[data-photo-stack]");
  if (!stack) return;

  /** @type {HTMLElement[]} front → back */
  const photos = Array.from(stack.querySelectorAll(".fridge__photo"));

  function paint() {
    photos.forEach((el, i) => {
      el.dataset.stack = String(i);
      el.classList.toggle("is-front-of-pile", i === 0);
    });
    // Later siblings paint above earlier ones; append back→front so front ends on top.
    for (let i = photos.length - 1; i >= 0; i -= 1) {
      stack.appendChild(photos[i]);
    }
  }

  function lift(el) {
    el.classList.add("is-lifted");
  }

  function unlift(el) {
    el.classList.remove("is-lifted");
    const idx = photos.indexOf(el);
    if (idx === -1) return;
    photos.splice(idx, 1);
    photos.push(el);
    paint();
  }

  photos.forEach((el) => {
    el.addEventListener("pointerenter", () => lift(el));
    el.addEventListener("pointerleave", () => unlift(el));
    el.addEventListener("focus", () => lift(el));
    el.addEventListener("blur", () => unlift(el));
  });

  paint();
})();
