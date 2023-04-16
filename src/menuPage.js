const generateMenuBackground = function () {
    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menu-background');
    return menuBackground;
};

const generateImage = function (path, altDescription, styleClass) {
    const img = document.createElement('img');
    img.classList.add(styleClass);
    img.src = path;
    img.setAttribute('alt', altDescription);
    return img;
};

const generateDishName = function (name) {
    const dishName = document.createElement('h2');
    dishName.classList.add('dish-name');
    dishName.innerHTML = name;
    return dishName;
};

const generateDishDescription = function (description) {
    const dishDescription = document.createElement('p');
    dishDescription.classList.add('dish-description');
    dishDescription.innerHTML = description;
    return dishDescription;
};


const generateMenuItem = function (imageElement, dishName, dishDescription) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.append(imageElement);
    menuItem.append(dishName);
    menuItem.append(dishDescription);
    return menuItem;
};

export { generateMenuBackground, generateImage };