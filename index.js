const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
const resizeImage = (value) => {
    const scale = value / 50;
    image.style.transform = `${scale}`;
};
const debouncedResize = debounce((event) => {
    resizeImage(event.target.value);
}, 1000); 
slider.addEventListener('input', debouncedResize);
const box = document.getElementById('box');
const moveBox = (event) => {
    const x = event.clientX - box.offsetWidth / 3;
    const y = event.clientY - box.offsetHeight / 3;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
};
const debouncedMove = debounce(moveBox, 1000); 
window.addEventListener('mousemove', debouncedMove);