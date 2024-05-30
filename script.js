

document.addEventListener("DOMContentLoaded", function() {
    // Initialize cart items array
    let cartItems = [];

    // Function to add item to the cart
    function addToCart(item) {
        cartItems.push(item);
        updateCart();
    }

    // Function to update the cart display
    function updateCart() {
        const cartIcon = document.querySelector('.navbar-cart a');
        cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> (${cartItems.length})`;
    }

    // Example usage: Add event listeners to add items to cart
    const exampleItem = { id: 1, name: "Portrait Sketch", price: 100 };
    document.querySelector('.photo-slider img').addEventListener('click', () => addToCart(exampleItem));

    // Function to handle form submission for contact page
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Process form data
            alert('Form submitted!');
        });
    }
});
