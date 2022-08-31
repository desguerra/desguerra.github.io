const footerCredEl = document.querySelector("#footer-credit");

// DATE - get current year for `footer`
const displayCredit = () => {
    let currentYear =  new Date().getFullYear();
    let credit = document.createElement("span");
    credit.innerHTML = `&copy; ${currentYear} - made with 🤍 by nikki esguerra`;

    footerCredEl.appendChild(credit);
};

displayCredit();