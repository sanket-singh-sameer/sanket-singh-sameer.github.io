const cursor = document.getElementById('cursor');
const cursorLag = document.getElementById('cursor-lag');

let mouseX = window.innerWidth;
let mouseY = window.innerHeight;

let cursorX = mouseX;
let cursorY = mouseY;
let lagX = mouseX;
let lagY = mouseY;

const cursorEase = 0.25;
const lagEase = 0.125;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * cursorEase;
    cursorY += (mouseY - cursorY) * cursorEase;
    lagX += (mouseX - lagX) * lagEase;
    lagY += (mouseY - lagY) * lagEase;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorLag.style.left = lagX + 'px';
    cursorLag.style.top = lagY + 'px';

    requestAnimationFrame(animateCursor);
}

animateCursor();





const aboutContent = document.getElementById('about-content');
const aboutImage = document.getElementById('about-image');

if (aboutContent && aboutImage) {

    const hoverImageSrc = new URL('./assets/images/compressed/img2.jpg', document.baseURI).href;
    const defaultImageSrc = new URL('./assets/images/compressed/img4.jpg', document.baseURI).href;

    aboutContent.addEventListener('mouseenter', () => {
        aboutImage.src = hoverImageSrc;
    });

    aboutContent.addEventListener('mouseleave', () => {
        aboutImage.src = defaultImageSrc;
    });
}

