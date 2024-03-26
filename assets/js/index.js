// façon optimisée
// sélectionne tout les élément avec la classe définie
const mouses = document.querySelectorAll(".mouse");
window.addEventListener("mousemove", (e) => {
  // foreach: pour chacun des éléments défini
  // pour chaque souris
  mouses.forEach((mouse) => {
    //Récupérer la position de défilement de la page
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Ajouter la position de défilement à la position de la souris

    const mouseX = e.clientX + scrollX;
    const mouseY = e.clientY + scrollY;

    mouse.style.top = e.y + "px"; //déplace l'element verticalement et px ajoute l'unité px a la valeur de e.y ou e.x
    mouse.style.left = e.x + "px"; // déplace l'element horizontalement
  });
});

//   //pour que les element suive la souris
//   // window.addEventListener("mousemove", (e) => {
//   //   cursor.style.top = e.y + "px";
//   //   cursor.style.left = e.x + "px";

//   //   mouse1.style.top = e.y + "px";
//   //   mouse1.style.left = e.x + "px";

//   //   mouse2.style.top = e.y + "px";
//   //   mouse2.style.left = e.x + "px";
//   // });
const sidebar = document.getElementById("side-bar"); // un evenement pour la side bar
const content = document.querySelector(".header-text"); // autre endroit de la page

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active"); //sortir a side bar
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active"); //ranger la sidebar
});

// Priorités en CSS : !important > id > classe > baliseHtml
