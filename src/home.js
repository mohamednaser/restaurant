export function renderHeader() {
  const contentID = document.getElementById('content');
  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';
  const headerTabs = document.createElement('ul');
  headerTabs.className = 'header-tabs';
  headerDiv.appendChild(headerTabs);
  const logoItem = document.createElement('li');
  logoItem.className = 'logo';
  const logoLink = document.createElement('a');
  logoItem.id = 'logo';
  logoLink.innerText = 'Zacks';
  const homeTab = document.createElement('li');
  homeTab.className = 'list-item';
  homeTab.id = 'home-tab';
  homeTab.innerText = 'Home';
  const menuTab = document.createElement('li');
  menuTab.className = 'list-item';
  menuTab.id = 'menu-tab';
  menuTab.innerText = 'Menu';
  const contactTab = document.createElement('li');
  contactTab.className = 'list-item';
  contactTab.id = 'contact-tab';
  contactTab.innerText = 'Contact';
  logoItem.appendChild(logoLink);
  headerTabs.appendChild(logoItem);
  headerTabs.appendChild(homeTab);
  headerTabs.appendChild(menuTab);
  headerTabs.appendChild(contactTab);
  contentID.appendChild(headerDiv);
}

export function initalizeContentClass() {
  const contentID = document.getElementById('content');
  const containerDiv = document.createElement('div');
  containerDiv.className = 'container';
  containerDiv.id = 'container';
  contentID.appendChild(containerDiv);
}

export function renderHomePage() {
  return `   
   <div id="home-container">
    <h1>Zacks's Restaurant</h1>
    <p>Eat, Drink</p>
    <p>- Be Merry</p>
  </div>
 `;
}

export function renderFooterPage() {
  const contentID = document.getElementById('content');
  const footerDiv = document.createElement('div');
  footerDiv.className = 'footer';
  const footerlist = document.createElement('ul');
  const rightReceived = document.createElement('li');
  rightReceived.className = 'list-item';
  rightReceived.innerText = 'All rights reserved';
  footerlist.appendChild(rightReceived);
  footerDiv.appendChild(footerlist);
  contentID.appendChild(footerDiv);
}
