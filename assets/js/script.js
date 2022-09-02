const footerCredEl = document.querySelector("#footer-credit");
const btnThemeEl = document.querySelector("#btn-theme");
const projectsContainerEl = document.querySelector("#projects-container");

/* SET THEME */
function setTheme() {
    const currentTheme = localStorage.getItem('theme') || 'mocha';
    document.documentElement.setAttribute('data-theme', currentTheme);
    btnThemeEl.textContent = currentTheme;
};

/* THEME BUTTON */
function switchTheme() {
    const themeName = localStorage.getItem('theme');
    let switchValue = 'mocha';

    if (themeName === 'mocha') {
        switchValue = 'whimsical';
    }
    else if (themeName === 'whimsical') {
        switchValue = 'beachy';
    }
    else if (themeName === 'beachy') {
        switchValue = 'plums';
    }
    else if (themeName === 'plums') {
        switchValue = 'amethyst';
    }
    else if (themeName === 'amethyst') {
        switchValue = 'matcha';
    }
    else if (themeName === 'matcha') {
        switchValue = 'berry';
    }
    else if (themeName === 'berry') {
        switchValue = 'mocha';
    }

    localStorage.setItem('theme', switchValue);

    setTheme();
};

/* DISPLAY PROJECTS ON PAGE */
/* const displayProjects = () => {

    console.log('testing...');

    const columnContainer = document.createElement('div');
    columnContainer.className = 'column col-sm-12 col-md-6 col-lg-4';

    const articleEl = document.createElement('article');
    articleEl.className = 'card text-center';

    const thumnailEl = document.createElement('div');
    thumnailEl.className = 'img';
    const imgEl = document.createElement('img');
    imgEl.className = 'card-img-top';
    imgEl.setAttribute('src', './assets/images/project-thumbnails/p1.PNG');
    imgEl.setAttribute('alt', 'project 1 thumbnail');

    const cardBodyEl1 = document.createElement('div');
    cardBodyEl1.className = 'card-body';
    const cardTitleEl = document.createElement('h4');
    cardTitleEl.className = 'card-title';
    cardTitleEl.textContent = 'personal portfolio';
    const cardPEl = document.createElement('p');
    cardPEl.className = 'card-text';
    cardPEl.textContent = 'the website you\'re looking at right now :)';

    const cardUlEl = document.createElement('ul');
    cardUlEl.className = 'list-group list-group-flush';
    const cardLiEl = document.createElement('li');
    cardLiEl.className = 'list-group-item';
    
}; */

/* DATE - get current year for `footer` */
const displayCredit = () => {
    let currentYear =  new Date().getFullYear();
    let credit = document.createElement("span");
    credit.innerHTML = `&copy; ${currentYear} - made with 🤍 by <strong>nikki esguerra</strong>`;

    footerCredEl.appendChild(credit);
};

/* CALL INITIAL FUNCTIONS */
setTheme();
/* displayProjects(); */
displayCredit();

/* EVENT LISTENERS */
btnThemeEl.addEventListener('click', switchTheme);