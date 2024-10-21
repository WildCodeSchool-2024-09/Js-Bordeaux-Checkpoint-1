document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar');
    const newAvatarSrc = 'image/logo-wcs.png';

    avatar.addEventListener('click', function() {
        avatar.src = newAvatarSrc;
    });
});

