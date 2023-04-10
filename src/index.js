import './style.css';
import { generateFooter, generateHeader, generateMain } from './homePage';
import { generateMenuBackground } from './menuPage';
import { generateContact } from './contactPage';
import { changeBackground } from './imageChange';

changeBackground();
const mainPage = document.getElementById('content');
mainPage.append(generateHeader());
mainPage.append(generateMain());
mainPage.append(generateFooter());

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const headerElement = document.querySelector('header');

const removeActiveClass = function () {
    if (homeButton.classList.contains('active')) homeButton.classList.remove('active');
    if (menuButton.classList.contains('active')) menuButton.classList.remove('active');
    if (contactButton.classList.contains('active')) contactButton.classList.remove('active');
};

homeButton.addEventListener('click', function () {
    removeActiveClass();
    homeButton.classList.add('active');
    headerElement.nextElementSibling.remove();
    headerElement.after(generateMain());
});

menuButton.addEventListener('click', function () {
    removeActiveClass();
    menuButton.classList.add('active');
    headerElement.nextElementSibling.remove();
    headerElement.after(generateMenuBackground());
});

contactButton.addEventListener('click', function () {
    removeActiveClass();
    contactButton.classList.add('active');
    headerElement.nextElementSibling.remove();
    headerElement.after(generateContact());
});





