import { renderHeader, renderHomePage, renderFooterPage } from './home';

renderHeader();
renderHomePage();
renderFooterPage();

const homeTabButton = document.getElementById('home-tab');
const menuTabButton = document.getElementById('menu-tab');
const homeDiv = document.getElementById('home-container');
const menuDiv = document.getElementById('menu');

function clickHomeTabButton() {
  menuDiv.style.display = 'none';
  homeDiv.style.display = 'block';
}

function clickMenuTabButton() {
  homeDiv.style.display = 'none';
  menuDiv.style.display = 'block';
}

homeTabButton.addEventListener('click', clickHomeTabButton);
menuTabButton.addEventListener('click', clickMenuTabButton);
