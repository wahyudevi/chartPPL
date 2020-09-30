const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => qty - 1;
const subTotal = (price, qty) => price * qty;


function disableDecrement(qty) {
    if (qty == 1) {
        return disabled = true;
    } else {
        return disabled = false;
    }
}

module.exports = {
    incrementQty,
    decrementQty,
    subTotal,
    disableDecrement
};
