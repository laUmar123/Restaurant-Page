import { generateImage } from "./menuPage";

const generateContact = function () {
    const background = document.createElement('div');
    background.classList.add('contact-background');
    background.append(generateContactDetails('telephone', '📞 Telephone Number: 0201-111-2222'));
    background.append(generateContactDetails('address', '📍 Location: 56 Mastmaker Rd London'));
    background.append(generateImage('./../src/assets/location.png', 'image of Canary Wharf on a map', 'location-image'));
    return background;
};

const generateContactDetails = function (className, message) {
    const element = document.createElement('p');
    element.classList.add(className);
    element.innerHTML = message;
    return element;
};

export { generateContact };