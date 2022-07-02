var cart_prices;


cart_prices = [];
let element_total = document.getElementById('total');
element_total.innerText = cart_prices.reduce((a,b) => a+b, 0);


document.getElementById('add-to-cart-1').addEventListener('click', (event) => {
  let element_cart = document.getElementById('cart');
  let new_li = document.createElement('li');
  new_li.innerText = 'Suzuki Ignis';

  element_cart.appendChild(new_li);
  cart_prices.unshift(3000);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = cart_prices.reduce((a,b) => a+b, 0);

});

document.getElementById('add-to-cart-2').addEventListener('click', (event) => {
  let element_cart2 = document.getElementById('cart');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Toyota Corolla';

  element_cart2.appendChild(new_li2);
  cart_prices.unshift(9000);
  let element_total3 = document.getElementById('total');
  element_total3.innerText = cart_prices.reduce((a,b) => a+b, 0);

});