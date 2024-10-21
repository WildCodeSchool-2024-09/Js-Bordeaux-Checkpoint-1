const avatar = document.querySelector(".avatar");
avatar.addEventListener('click', function(){
    avatar.src = 'image/avatar-bis.png'
});

const sectionPink = document.querySelector(".pink-bg");
const nameButton = document.createElement('button');
nameButton.type = 'button';
nameButton.textContent = 'Change name and color';
sectionPink.appendChild(nameButton);

nameButton.addEventListener('click', function(){
    let userName = prompt("Enter your name");
    const firstName = document.querySelector('span');
    firstName.textContent = `${userName}`;
    firstName.style.color = 'white';

    let backgroundColor = prompt('Enter a color');
    let root = document.documentElement;
    root.style.setProperty('--lightWildColor', `${backgroundColor}`);
});

