const cartItems=loadCart();


function loadCart() {
    console.log(sessionStorage);
   const item= JSON.parse(sessionStorage.getItem('cartItems')) || [];
   return item;
}

function renderCart() {
   
    console.log(cartItems);
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear current items
    
    console.log(cartItems);
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
                <div class="item-price">${item.price}€</div>
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
    sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
    renderCart();
}

function emptyCart() {
    cartItems.length = 0; 
    sessionStorage.removeItem('cartItems'); 
    renderCart();
}

function updateTotalPrice() {
    let total=0;
    cartItems.forEach(item=>{total+=parseFloat(item.price)})
    document.getElementById("total-price").textContent = total.toFixed(2);
}

// Initialize cart
renderCart();

function refresh(){
    console.log(cartItems);
}