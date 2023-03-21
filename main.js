let plusButtons = document.querySelectorAll('.plus-btn');

let minusButtons = document.querySelectorAll('.minus-btn');
let quantityInputs = document.querySelectorAll('.quantity-input');
let deleteButtons = document.querySelectorAll('.delete-btn');
var likeButtons = document.querySelectorAll('.like-btn');

const image = document.getElementById("myImage");

let totalPriceElement = document.querySelector('.total-price');

function updateTotalPrice() {
  let cartItems = document.querySelectorAll('.cart-item');
  let totalPrice = 0;

  cartItems.forEach((item) => {
    let priceElement = item.querySelector('.item-price');
    let quantityElement = item.querySelector('.quantity-input');
    let price = parseFloat(priceElement.innerText.replace('$', ''));
    let quantity = parseInt(quantityElement.value);
    totalPrice += price * quantity;
  });

  totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

plusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    quantityInputs[index].value++;
    updateTotalPrice();
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (quantityInputs[index].value > 0) {
      quantityInputs[index].value--;
      updateTotalPrice();
    }
  });
});

quantityInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value < 1) {
      input.value = 1;
    }
    updateTotalPrice();
  });
});

deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('.cart-item').remove();
    updateTotalPrice();
  });
});



function changeColor() {
  const likeBtn = document.querySelector('.like-btn');
  if (likeBtn.style.backgroundColor === 'red') {
    likeBtn.style.backgroundColor = 'white';
  } else {
    likeBtn.style.backgroundColor = 'red';
  }
}








  

