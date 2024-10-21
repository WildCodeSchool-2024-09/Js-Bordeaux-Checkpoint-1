const avatarPicture = document.getElementById("avatarlogo");
avatarPicture.addEventListener("click", function () {
  avatarPicture.src = "image/avatar.svg";
});
const backgroundColorPink = document.getElementsByClassName("pink-bg")[0];
const firstName = document.getElementById("firstname");
const clickButton = document.getElementById("button");
const pinkyElement = document.querySelectorAll(".pink-text");
clickButton.addEventListener("click", function () {
  firstName.textContent = prompt("What's your name ?");
  firstName.style.color = "white";
  backgroundColorPink.style.backgroundColor = "#750ff7";
  pinkyElement.forEach((pinkyElement) => {
    pinkyElement.style.color = "#750ff7";
  });
});
