// -------------------------characters--------------------------------

const heroes = document.querySelectorAll(".hero");
function removeActiveClasses() {
  heroes.forEach((hero) => {
    hero.classList.remove("active");
  });
}
heroes.forEach((hero) => {
  hero.addEventListener("click", () => {
    console.log('hello')
    removeActiveClasses();
    hero.classList.add("active");
  });
});




