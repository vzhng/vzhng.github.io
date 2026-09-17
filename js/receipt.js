(function () {
  var el = document.getElementById("receipt-date-value");
  if (!el) return;

  var now = new Date();
  var formatted = now
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
  el.textContent = formatted;
})();
