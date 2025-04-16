const cartItems = loadCart();

function loadCart() {
    const items = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    
    return items.map(item => ({...item, quantity: item.quantity || 1}));
}

function renderCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    
    if (cartItems.length === 0) {
        document.getElementById("empty-cart-message").style.display = "block";
        document.querySelector(".cart-footer").style.display = "none";
    } else {
        document.getElementById("empty-cart-message").style.display = "none";
        document.querySelector(".cart-footer").style.display = "flex";

        cartItems.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-name">${item.name}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="item-price">${(item.price * item.quantity).toFixed(2)}€</div>
                <button class="remove-btn" onclick="removeItem(${index})">Ukloni</button>
            `;
            cartContainer.appendChild(itemDiv);
        });
        updateTotalPrice();
    }
}

function removeItem(index) {
    cartItems.splice(index, 1);
    sessionStorage.removeItem('cartItems'); 
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    renderCart();
}

function emptyCart() {
    cartItems.length = 0; 
    sessionStorage.removeItem('cartItems'); 
    renderCart();
}

function updateQuantity(index, change) {
    const newQuantity = cartItems[index].quantity + change;
    if (newQuantity > 0) {
        cartItems[index].quantity = newQuantity;
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
    } else if (newQuantity === 0) {
        removeItem(index);
    }
}

function updateTotalPrice() {
    const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
    document.getElementById("total-price").textContent = total.toFixed(2);
}

// Initialize cart
renderCart();

function refresh(){
    console.log(cartItems);
}