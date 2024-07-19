// Define an empty shopping cart array
const shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
    };
    shoppingCart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear the previous content

    shoppingCart.forEach((product) => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(cartItem);
    });
}

// Add event listeners for "Buy Now" buttons
const buyButtons = document.querySelectorAll(".buy-button");
buyButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productTitle = document.querySelectorAll("h2")[index].textContent;
        const productPrice = parseFloat(
            document.querySelectorAll("p.price")[index].textContent.replace("Price: $", "")
        );
        addToCart(productTitle, productPrice);
    });
});
