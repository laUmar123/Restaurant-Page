const generateMenuBackground = function () {
    const menuBackground = document.createElement('div');
    menuBackground.classList.add('menu-background');
    const biryani = generateMenuItem(generateImage('./../src/assets/biryani.jpg', 'plate of biryani', 'dish-image'), generateDishName('Biryani'), generateDishDescription('A spiced mix of meat and rice, cooked over an open fire in a leather pot'));
    const kebab = generateMenuItem(generateImage('./../src/assets/kebab.jpg', 'plate of 5 kebabs on skewers', 'dish-image'), generateDishName('Kebabs'), generateDishDescription('Combines small pieces of lamb with vegetables on a skewer and is then grilled.'));
    const samosa = generateMenuItem(generateImage('./../src/assets/samosa.jpg', 'plate of 4 samosas along with chilli', 'dish-image'), generateDishName('Samosa'), generateDishDescription('A pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas.'));
    const chickenCurry = generateMenuItem(generateImage('./../src/assets/chicken-curry.jpg', 'plate of 4 samosas along with chilli', 'dish-image'), generateDishName('Chicken Curry'), generateDishDescription('Chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices.'));
    const chickpeaStew = generateMenuItem(generateImage('./../src/assets/chickpea-stew.jpg', 'plate of 4 samosas along with chilli', 'dish-image'), generateDishName('Chickpea Stew'), generateDishDescription('Spiced chickpeas are crisped in olive oil, then simmered in a garlicky coconut milk for an insanely creamy finish.'));
    const lambCurry = generateMenuItem(generateImage('./../src/assets/lamb-curry.jpg', 'plate of 4 samosas along with chilli', 'dish-image'), generateDishName('Lamb Curry'), generateDishDescription('Lamb stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices.'));
    const dishes = [biryani, kebab, samosa, chickenCurry, chickpeaStew, lambCurry];
    for (let i = 0; i < dishes.length; i++) {
        menuBackground.append(dishes[i]);
    }
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