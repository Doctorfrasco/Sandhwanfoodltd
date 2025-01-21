let cart = [];
let totalAmount = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const listItem = document.createElement('li');
        listItem.textContent = `${cartItem.item} - ₹${cartItem.price}`;
        cartItems.appendChild(listItem);
    });
    document.getElementById('totalAmount').textContent = totalAmount;

    // Update the UPI payment link
    const upiLink = `upi://pay?pa=yourupiid@bank&pn=YourName&am=${totalAmount}&cu=INR&tn=Food+Order+Payment`;
    document.getElementById('payNowLink').setAttribute('href', upiLink);
}
