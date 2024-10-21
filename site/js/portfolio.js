const avatar = document.getElementById("avatar");
const modifybtn = document.getElementById("modifyText");

// Step 1
avatar.addEventListener("click", () => {
  avatar.src = "./image/avatar.svg";
});

// Step2
modifybtn.addEventListener("click", () => {
  const firstName = document.querySelector("#firstname");
  const pinktext = document.querySelectorAll(".pink-text");
  const navLink = document.querySelectorAll("a");
  const descriptionBg = document.querySelectorAll(".description.pink-bg");
  const bgColor = prompt("Quels couleurs voulez vous ?");
  const userName = prompt("Quel est votre nom ?");
  firstName.textContent = userName;
  firstName.style.color = "white";
  descriptionBg.forEach((descriptionBg) => {
    descriptionBg.style.backgroundColor = bgColor;
  });
  pinktext.forEach((pinktext) => {
    pinktext.style.color = bgColor;
  });
  navLink.forEach((navLink) => {
    navLink.style.color = "#750ff7";
  });
});
