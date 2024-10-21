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

const link = document.querySelectorAll('a');
link.forEach(element => {
    element.style.color = '#750ff7';
});

const frontDevTools = document.querySelector('#front-dev-tools');

const modifyButton = document.createElement('button');
modifyButton.type = 'button';
modifyButton.textContent = 'Modify';
frontDevTools.appendChild(modifyButton);

modifyButton.addEventListener('click', function(){
    const list = document.querySelectorAll('.front-dev-tools');
    list.forEach(element => {
        element.textContent = '';
    });
    const firstLi = document.createElement('li');
    firstLi.textContent = 'Terminal';
    frontDevTools.prepend(firstLi);
    const secondLi = document.createElement('li');
    secondLi.textContent = 'GitHub';
    frontDevTools.prepend(secondLi);
    const thirdLi = document.createElement('li');
    thirdLi.textContent = 'VSCode';
    frontDevTools.prepend(thirdLi);
});

