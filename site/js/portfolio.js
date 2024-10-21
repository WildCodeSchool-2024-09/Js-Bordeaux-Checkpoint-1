const avatar = document.getElementById("avatar");
const modifybtn = document.getElementById("modifyText");

// Step 1
avatar.addEventListener("click", () => {
  avatar.src = "./image/avatar.svg";
});

// Step2
modifybtn.addEventListener("click", () => {
  const firstName = document.querySelector("#firstname");
  const userName = prompt("Quel est votre nom ?");
  firstName.textContent = userName;
  firstName.style.color = "white";
});
