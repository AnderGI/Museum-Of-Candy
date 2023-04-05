document.addEventListener("scroll", function () {
  const nav = document.querySelector("#mainNavbar");
  window.scrollY > nav.scrollHeight
    ? nav.classList.add("scrolled")
    : nav.classList.remove("scrolled");
});
