const generateHeader = function () {
    const header = document.createElement('header');
    return header;
};

/**
 * this function creates a h1 element, adds the title class to it and sets the inner html to the taste of pakistan
 * @returns the title DOM element
 */
const generateTitle = function () {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = "The Taste of Pakistan";
    return title;
};

/**
 * generates a div element with 3 nav items within it
 * @returns a div element that contains all nav items
 */
const generateNav = function () {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const navItemOne = document.createElement('div');
    navItemOne.classList.add('nav-item');
    navItemOne.id = 'home'
    navItemOne.classList.add('active');
    navItemOne.innerHTML = 'HOME';
    const navItemTwo = document.createElement('div');
    navItemTwo.innerHTML = 'MENU';
    navItemTwo.id = 'menu';
    const navItemThree = document.createElement('div');
    navItemThree.innerHTML = 'CONTACT';
    navItemThree.id = 'contact';
    navItemOne.classList.add('nav-item');
    navItemTwo.classList.add('nav-item');
    navItemThree.classList.add('nav-item');
    nav.append(navItemOne);
    nav.append(navItemTwo);
    nav.append(navItemThree);
    return nav;
};

export { generateHeader };