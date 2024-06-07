var totalPrice = 0;

function addToCart(productName, price) {
    totalPrice += price;
    updateCartTotal();

    // Create the cart item
    var cartItem = document.createElement('div');
    cartItem.innerText = productName + ' - RS.' + price;
    
    // Append the cart item to the cart container
    document.getElementById('cartItems').appendChild(cartItem);
}

function updateCartTotal() {
    document.getElementById('cartTotal').innerText = 'Total: RS.' + totalPrice; 
}

function checkout() {
    alert('Total Price: RS.' + totalPrice);
}


