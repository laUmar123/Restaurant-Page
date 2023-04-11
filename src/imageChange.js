import imageOne from './assets/imageOne.jpg'
import imageTwo from './assets/imageTwo.jpg'
import imageThree from './assets/imageThree.jpg'

const images = [imageOne, imageTwo, imageThree];

function changeBackground() {
    const mainPage = document.getElementById('content');
    let i = 0;
    setInterval(function () {
        mainPage.style.backgroundImage = `url("${images[i]}")`;
        i = i + 1;
        if (i == images.length) {
            i = 0;
        }
    }, 10000);
};

export { changeBackground };