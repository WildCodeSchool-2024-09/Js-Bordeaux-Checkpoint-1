const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", function () {
	avatar.src = "./image/avatar.svg";
});


const buttonContainer = document.querySelector(".button-container");
const firstNameButton = document.createElement("button");
firstNameButton.classList.add("userNameButton");
firstNameButton.textContent = "Modify text and color."
buttonContainer.appendChild(firstNameButton);


firstNameButton.addEventListener('click', function() {
    let userColorInput = prompt("Enter a color.");
    let bgColor = document.querySelector(".description pink-bg");
    let userInput = prompt("What's your name?");
    let firstName = document.getElementById("firstname");
    firstName.style.color="white";
    firstName.replaceWith(userInput);
    bgColor.style.backgroundColor=userColorInput;
})

