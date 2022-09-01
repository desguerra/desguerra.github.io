const footerCredEl = document.querySelector("#footer-credit");
const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

/* THEME SLIDER */
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'plums') {
        toggleSwitch.checked = true;
    }
}

function switchTheme (event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'plums');
        localStorage.setItem('theme', 'plums');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'mocha');
        localStorage.setItem('theme', 'mocha');
    }
};

/* DATE - get current year for `footer` */
const displayCredit = () => {
    let currentYear =  new Date().getFullYear();
    let credit = document.createElement("span");
    credit.innerHTML = `&copy; ${currentYear} - made with 🤍 by <span class="strong">nikki esguerra</span>`;

    footerCredEl.appendChild(credit);
};

/* CALL INITIAL FUNCTIONS */
displayCredit();

/* EVENT LISTENERS */
toggleSwitch.addEventListener('change', switchTheme, false);