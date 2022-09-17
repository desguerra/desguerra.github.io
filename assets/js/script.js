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