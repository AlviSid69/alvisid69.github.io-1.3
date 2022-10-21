const spoiler = document.querySelector('.swiper__spoiler-text');
const spoilerIcon = document.querySelector('.swiper__spoiler-icon');
const slidesHidden = document.querySelectorAll('.swiper-slide--desktop-hidden');

spoiler.onclick = function () {
    let lessText = 'Скрыть';
    let moreText = 'Показать всё';

    if (spoiler.innerHTML === lessText) {
        spoiler.innerHTML = moreText;
        slidesHidden.forEach((el) => {
            el.style.display = 'none';
        })
        spoilerIcon.classList.remove('rotate');
    } else {
        spoiler.innerHTML = lessText;
        slidesHidden.forEach((el) => {
            el.style.display = 'block';
        })
        spoilerIcon.classList.add('rotate');
    }
};