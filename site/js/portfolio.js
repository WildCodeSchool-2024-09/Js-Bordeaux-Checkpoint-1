const avatarImg = document.querySelector(".avatar");

avatarImg.addEventListener("click", (event) => {
	avatarImg.src = "image/avatar-bis.png";
	avatarImg.alt = "avatar image bis";
});

// const textButton = document.createElement("button");
// textButton.innerText = "change text and color";
// document.section.description.appendChild(textButton);

const textButton = document.querySelector("button.pink-bg");

textButton.addEventListener("click", (event) => {
	const changeName = prompt("Enter your name");
	document.querySelector("#firstname").style.color = "#fff";
	document.querySelector("#firstname").innerHTML = changeName;

	const changeBgColor = prompt("Enter a color");

	const pinkBg = document.querySelectorAll(".pink-bg");
	for (let i = 0; i < pinkBg.length; i++) {
		pinkBg[i].style.backgroundColor = changeBgColor;
	}
	// document.querySelector("button.pink-bg").style.backgroundColor =
	// 	changeBgColor;
	const pinkText = document.querySelectorAll(".pink-text");
	for (let i = 0; i < pinkText.length; i++) {
		pinkText[i].style.color = changeBgColor;
	}
});
