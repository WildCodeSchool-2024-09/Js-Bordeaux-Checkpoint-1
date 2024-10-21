const avatar = document.getElementById("avatar");
const modifybtn = document.getElementById("modifyText");
const modifyDevTools = document.getElementById("modifyDevTools");
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
  const userName = prompt("Quel est votre nom ?");
  firstName.textContent = userName;
  firstName.style.color = "white";
  descriptionBg.forEach((descriptionBg) => {
    descriptionBg.style.backgroundColor = "#750ff7";
  });
  pinktext.forEach((pinktext) => {
    pinktext.style.color = "#750ff7";
  });
  navLink.forEach((navLink) => {
    navLink.style.color = "#750ff7";
  });
});

modifyDevTools.addEventListener("click", () => {
  const frontDevTools = document.querySelector("front-dev-tools");
  const li = document.querySelectorAll(".liDevTools");
  for (let i = 0; i < li.length; i++) {
    const allLi = li[i];
  }
});
