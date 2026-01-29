const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');

let index = 0;

setInterval(() => {
    index++;
    if(index >= slides.length){
        index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;
}, 3500);
