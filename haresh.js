var typed = new Typed('#typed', {
    strings: ['Athlete.', 'Bodybuilder.', 'Entreprenuer.'],
    backSpeed: 40,
    typeSpeed: 40,
    loop: true,
    showCursor: false,
    backDelay: 700,
});

var like = document.getElementById('likeButton');

like.addEventListener('click', function () {
    like.classList.toggle('btn-clicked');
});

var container = document.querySelector('.container');

var bg = document.getElementById('bg');

bg.addEventListener('click', function () {
    container.classList.toggle('dark-bg');
});