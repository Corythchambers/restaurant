import createContact from "./contact";
import createHome from "./home";
import createMenu from "./menu";

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function loadHome() {
    clearContent();
    const content = document.getElementById('content');
    content.appendChild(createHome());
}

function loadMenu() {
    clearContent();
    const content = document.getElementById('content');
    content.appendChild(createMenu());
}

function loadContact() {
    clearContent();
    const content = document.getElementById('content');
    content.appendChild(createContact());
}

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('nav button:nth-child(1)');
    const menuButton = document.querySelector('nav button:nth-child(2)');
    const contactButton = document.querySelector('nav button:nth-child(3)');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    contactButton.addEventListener('click', loadContact);

    loadHome();
})
