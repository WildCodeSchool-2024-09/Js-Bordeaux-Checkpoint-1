const avatar = document.querySelector("section:first-of-type > img");
console.log(avatar);

// avatar.addEventListener("click", function () {
//   avatar.src = "image/avatar.svg";
// });
avatar.addEventListener("click", () => {
   avatar.src = "image/avatar.svg";
});