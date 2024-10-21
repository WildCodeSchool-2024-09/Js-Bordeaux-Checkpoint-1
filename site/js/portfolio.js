// First Step
const avatar = document.querySelector("section:first-of-type > img");

// avatar.addEventListener("click", function () {
//   avatar.src = "image/avatar.svg";
// });
avatar.addEventListener("click", () => {
   avatar.src = "image/avatar.svg";
});

// Second Step

// 1 Cibler le container du parent
const buttonContainer = document.querySelector(".description");
//2 Créer le bouton
const button = document.createElement("button");
button.textContent = "Modify text and color";
button.type = "button";
// 3 Rattacher le bouton au parent
buttonContainer.appendChild(button);
// 4 Cibler le texte qui change
const firstname = document.querySelector("#firstname");
// 5 Écouter le click sur le bouton
button.addEventListener("click", () => {
   // 6 Stocker la valeur du prompt dans une variable
   const value = prompt("Enter your name");
   firstname.textContent = value;
   firstname.style.color = "white";   
})

