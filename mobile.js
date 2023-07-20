Fork practice
function addToCart() {
    var specification1 = document.getElementById('specification1').textContent;
    var cartItems = document.getElementById('cart-items');
    var li = document.createElement('li');
    li.textContent = specification1;
    cartItems.appendChild(li);
  }
  
  function showCart() {
    var cart = document.getElementById('cart');
    cart.style.display = 'block';
  }
  
  function hideCart() {
    var cart = document.getElementById('cart');
    cart.style.display = 'none';
  }
  
  function changeFontSize() {
    var specification = document.getElementById('specification');
    var currentFontSize = parseInt(window.getComputedStyle(specification).fontSize);
    var newFontSize = currentFontSize + 2 + 'px';
    specification.style.fontSize = newFontSize;
  }
  
  function changeFontColor() {
    var specification = document.getElementById('specification');
    var fontColorSelect = document.getElementById('font-color-select');
    var selectedColor = fontColorSelect.value;
    specification.style.color = selectedColor;
  }
  document.getElementById('add-to-cart-btn').disabled = false; // Enable "Add to Cart" button
