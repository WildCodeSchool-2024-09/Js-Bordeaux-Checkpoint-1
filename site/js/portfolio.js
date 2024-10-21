document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const newAvatarSrc = 'image/avatar.svg';

    avatar.addEventListener('click', function() {
        avatar.src = newAvatarSrc;
    });
});

