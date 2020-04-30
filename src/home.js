export function renderHeader() {
  const contentID = document.getElementById('content');
  contentID.innerHTML += `  
                <div class="header">
                <ul class="header-tabs">
                <li class="logo">
                    <a id="logo" href="#home"> Zacks </a>
                </li>
                <li class="list-item" id="home-tab">Home</li>
                <li class="list-item" id="menu-tab">Menu</li>
                </ul>
            </div>
      `;
}

export function renderHomePage() {
  const contentID = document.getElementById('content');
  contentID.innerHTML += `    <div class="container">
  <div id="home-container">
    <h1>Zacks's Restaurant</h1>
    <p>Eat, Drink</p>
    <p>- Be Merry</p>
  </div>

  <div id="menu">
    <div class="meal">
      <h5 class="meal-header">
        <i class="fas fa-ice-cream"></i>
        <span> Cold Starters </span>
      </h5>
      <div class="meal-items">
        <div>
          <p>Burbon Chicken (250g)</p>
        </div>
        <p>$ 16</p>
      </div>
      <div class="meal-items">
        <div>
          <p>To Die for Crock Pot Roast (300g)</p>
        </div>
        <p>$ 19</p>
      </div>
      <div class="meal-items">
        <div>
          <p>Crock Pot Chicken (300g)</p>
        </div>
        <p>$ 10</p>
      </div>
    </div>
    <div class="meal">
      <h5 class="meal-header">
        <i class="fas fa-cookie"></i>
        <span> Soup </span>
      </h5>
      <div class="meal-items">
        <div>
          <p>Burbon Chicken (250g)</p>
        </div>
        <p>$ 16</p>
      </div>
      <div class="meal-items">
        <div>
          <p>To Die for Crock Pot Roast (300g)</p>
        </div>
        <p>$ 19</p>
      </div>
      <div class="meal-items">
        <div>
          <p>Crock Pot Chicken (300g)</p>
        </div>
        <p>$ 10</p>
      </div>
    </div>
    <div class="meal">
      <h5 class="meal-header">
        <i class="fas fa-drumstick-bite"></i>
        <span> Main Meals </span>
      </h5>
      <div class="meal-items">
        <div>
          <p>Burbon Chicken (250g)</p>
        </div>
        <p>$ 16</p>
      </div>
      <div class="meal-items">
        <div>
          <p>To Die for Crock Pot Roast (300g)</p>
        </div>
        <p>$ 19</p>
      </div>
      <div class="meal-items">
        <div>
          <p>Crock Pot Chicken (300g)</p>
        </div>
        <p>$ 10</p>
      </div>
    </div>
    <div class="meal">
      <h5 class="meal-header">
        <i class="fas fa-ice-cream"></i>
        <span> Salad </span>
      </h5>
      <div class="meal-items">
        <div>
          <p>Burbon Chicken (250g)</p>
        </div>
        <p>$ 16</p>
      </div>
      <div class="meal-items">
        <div>
          <p>To Die for Crock Pot Roast (300g)</p>
        </div>
        <p>$ 19</p>
      </div>
      <div class="meal-items">
        <div>
          <p>Crock Pot Chicken (300g)</p>
        </div>
        <p>$ 10</p>
      </div>
    </div>
    <div class="meal">
      <h5 class="meal-header">
        <i class="fas fa-wine-glass-alt"></i>
        <span> Drinks </span>
      </h5>
      <div class="meal-items">
        <div>
          <p>Burbon Chicken (250g)</p>
        </div>
        <p>$ 16</p>
      </div>
      <div class="meal-items">
        <div>
          <p>To Die for Crock Pot Roast (300g)</p>
        </div>
        <p>$ 19</p>
      </div>
      <div class="meal-items">
        <div>
          <p>Crock Pot Chicken (300g)</p>
        </div>
        <p>$ 10</p>
      </div>
    </div>
  </div>
</div>`;
}

export function renderFooterPage() {
  const contentID = document.getElementById('content');
  contentID.innerHTML += `  
        <div class="footer">
        <ul>
            <li class="list-item">All rights reserved</li>
        </ul>
        </div>
    `;
}
