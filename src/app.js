import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const price = document.querySelector('#price');
const qtyInput = document.querySelector('#qty');
const subTotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmCodeBtn = document.querySelector('#diskon');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value,
    qty.value,
    discount
  )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value,
    qty.value,
    discount
  )}`;
});

confirmCodeBtn.addEventListener("click", () => {
  if (code.value === "DIC25") {
    discount = 25;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else if (code.value === "DIC30") {
    discount = 30;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else if (code.value === "DIC50") {
    discount = 50;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else if (code.value === "DIC60") {
    discount = 60;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else if (code.value === "DIC70") {
    discount = 70;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else if (code.value === "DIC75") {
    discount = 75;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  } else {
    discount = 0;
    subTotal.textContent = `Rp. ${reclculateSubtotal(
      price.value,
      qty.value,
      discount
    )}`;
  }
});