import {
  renderHeader,
  renderHomePage,
  renderFooterPage,
  initalizeContentClass,
} from './home';
import contact from './contact';
import menu from './menu';


renderHeader();
initalizeContentClass();
const containerDiv = document.getElementById('container');
containerDiv.innerHTML = renderHomePage();
renderFooterPage();

const homeTabButton = document.getElementById('home-tab');
const menuTabButton = document.getElementById('menu-tab');
const contactTabButton = document.getElementById('contact-tab');

function clickHomeTabButton() {
  containerDiv.innerHTML = renderHomePage();
}

function clickMenuTabButton() {
  containerDiv.innerHTML = menu();
}

function clickContactTabButton() {
  containerDiv.innerHTML = contact();
}

homeTabButton.addEventListener('click', clickHomeTabButton);
menuTabButton.addEventListener('click', clickMenuTabButton);
contactTabButton.addEventListener('click', clickContactTabButton);
