const changeAvatar = document.querySelector(".avatar");

changeAvatar.addEventListener("click", () => {
  const img = document.querySelector(".avatar");
  img.src = "image/avatar.svg";
});

const firstNameElement = document.querySelector("#firstname");
const buttonPlace = document.querySelector(".description");
const buttonName = document.createElement("button");
buttonName.textContent = "Modify name and color";
buttonPlace.appendChild(buttonName);

buttonName.addEventListener("click", () => {
  const newName = prompt("Enter your new name:");
    firstNameElement.textContent = newName;
    firstNameElement.style.color = "white";
});