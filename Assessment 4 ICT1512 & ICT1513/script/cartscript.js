// script/cartscript.js

// Function to add an item to the cart
function addToCart(item) {
    // Get the cart from localStorage or initialize it if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the item to the cart
    cart.push(item);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Alert the user that the item has been added to the cart (you can remove this if you want)
    alert('Item added to cart.');

    // Update the cart display
    displayCart();
}

// Function to display the cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let total = 0;

    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Loop through each item in the cart and display it
    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <span>R${item.price.toFixed(2)}</span>
            <button class="remove-item-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    // Update the total price display
    document.getElementById('cart-total').innerText = `R${total.toFixed(2)}`;

    // Attach event listeners to remove item buttons
    const removeItemBtns = document.querySelectorAll('.remove-item-btn');
    removeItemBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(btn.getAttribute('data-index'));
            removeItem(index);
        });
    });
}

// Function to remove an item from the cart
function removeItem(index) {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cart.splice(index, 1);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    displayCart();
}

// Function to clear the entire cart
function clearCart() {
    // Remove the cart from localStorage
    localStorage.removeItem('cart');

    // Update the cart display
    displayCart();
}

// Call the displayCart function to show the cart items on page load
document.addEventListener('DOMContentLoaded', displayCart);

// Attach event listener to clear cart button
document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
