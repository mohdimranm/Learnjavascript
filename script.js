'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnclose = document.querySelector('.close-modal');

const btnopen = document.querySelectorAll('.show-modal');

console.log(btnopen);

const openmodal = function () {

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnopen.length; i++) {
    btnopen[i].addEventListener('click', openmodal);
}


btnclose.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && (!modal.classList.contains('hidden'))) {
        closemodal();
    }
});