// Je selectionne et je stocke
// L'icône burger
const icone = document.querySelector(".navbar-mobile i");
console.log(icone);
// La DIV modal
const modal = document.querySelector(".modal");
console.log(modal);

icone.addEventListener("click", function () {
  console.log("icone cliquée");
  modal.classList.toggle("change-modal");
  icone.classList.toggle("fa-times");
});
