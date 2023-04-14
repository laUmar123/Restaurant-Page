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

/**
 * Generates the main element for the home page
 * @returns the main DOM element that contains the home page's main content
 */
const generateMain = function () {
    const main = document.createElement('main');
    const titleTwo = document.createElement('h2');
    const established = document.createElement('h6');
    titleTwo.innerHTML = 'The Finest Pakistani Cuisine';
    established.innerHTML = 'ESTABLISHED SINCE 1880';
    main.append(titleTwo);
    main.append(established);
    return main;
};

/**
 * Generates the footer element that will be used on all pages
 * @returns the footer DOM element
 */
const generateFooter = function () {
    const footer = document.createElement('footer');
    const footerMessage = document.createElement('h4');
    const gitImage = document.createElement('img');
    gitImage.src = "./../src/assets/iconmonstr-github-1-240.png";
    footerMessage.innerHTML = `Developed by laUmar123`;
    footerMessage.append(gitImage);
    footer.append(footerMessage);
    return footer;
};

export { generateHeader };