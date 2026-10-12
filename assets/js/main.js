/* Small progressive enhancement; the portfolio works without JavaScript. */
document.addEventListener("DOMContentLoaded", () => {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });

  const currentPath = window.location.pathname.replace(/\/+$/, "");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    const target = new URL(link.href, window.location.href);
    const targetPath = target.pathname.replace(/\/+$/, "");
    if (targetPath === currentPath && !target.hash) {
      link.setAttribute("aria-current", "page");
    }
  });
});
