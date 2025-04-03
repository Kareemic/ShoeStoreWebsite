const data = {
    "website": "Shoes",
    "categories": [
        { 
            "name" : "Yeezy",
            "image" : "Yeezy.jpg",
            "products" : [
                { 
                    "name" : "Yeezy 350V2 Bred", "image" : "./Pictures/Yeezy/yeezy350 blackred.jpg","price":"149.99"
                },
                { 
                    "name" : "Yeezy 350V2 BlackBlue", "image" : "./Pictures/Yeezy/yeezy350 oreo.jpg","price":"149.99"
                },                
                { 
                    "name" : "Yeezy 350V2 Oreo", "image" : "./Pictures/Yeezy/yeezy350 blackorange.jpg","price":"149.99"
                }
                ,                
                { 
                    "name" : "Yeezy 350V2 Oreo", "image" : "./Pictures/Yeezy/yeezy350 blackorange.jpg","price":"149.99"
                }
                ,                
                { 
                    "name" : "Yeezy 350V2 Oreo", "image" : "./Pictures/Yeezy/yeezy350 blackorange.jpg","price":"149.99"
                }
            ]
        },
        { 
            "name" : "Adidas",
            "image" : "candy.jpg",
            "products" : [
                { 
                    "name" : "Adidas B300 black", "image" : "./Pictures/Adidas/black.jpeg","price":"79.99"
                },
                { 
                    "name" : "Adidas B300 Red", "image" : "./Pictures/Adidas/red.jpeg","price":"79.99"
                }
                ,
                { 
                    "name" : "Adidas Asin Black", "image" : "./Pictures/Adidas/black2.jpeg","price":"99.99"
                }
            ]
        }
    ]
}

const katalog =document.getElementById("Katalog");

const category=document.getElementById("trenutnaKategorija").innerHTML;
const selectedCategory=document.getElementById("trenutnaKategorija");
console.log(category);

const categoryDiv=document.getElementById("Katalog");
const proizvodi=data.categories.find(categor => categor.name === category);
proizvodi.products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("proizvod");
    productDiv.innerHTML = `
        <img class="proizvodImage" src="${product.image}" alt="${product.name}">
        <button  class="addToCart" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
        <p class="name">${product.name}</p>
       <h4 class="price"><s>(200€)</s> <strong>${product.price}€</strong></h4>
    `;
    categoryDiv.appendChild(productDiv);
});

const odabir=document.getElementById("odabir");
const elementiKat=document.querySelectorAll(".item");

elementiKat.forEach(item=>{item.addEventListener("click",function(){
    selectedCategory.innerHTML=item.innerHTML;
    elementiKat.forEach(stil=>{stil.style.color="#0d1b2a"})
    item.style.color="red";
    const proizvodi=data.categories.find(categor => categor.name === selectedCategory.innerHTML);
    odabir.innerHTML=item.innerHTML;
    categoryDiv.innerHTML="";
    proizvodi.products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("proizvod");
    productDiv.innerHTML = `
        <img class="proizvodImage" src="${product.image}" alt="${product.name}">
        <button  class="addToCart" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
        <p class="name">${product.name}</p>
       <h4 class="price"><s>(200€)</s> <strong>${product.price}€</strong></h4>
    `;
    categoryDiv.appendChild(productDiv);
});
})
}

)
console.log(elementiKat);


const cartItems =[];
const Buttons=document.querySelectorAll(".addToCart");
const cart=document.getElementById("kosarica");

function addToCart(product){
    cartItems.push(product);
    console.log(product);
    updateCart();

}


const cartIcon=document.getElementById("cart");
function updateCart() {
    let count=cartItems.length;
    document.documentElement.style.setProperty("--show-cart",1)
    document.documentElement.style.setProperty("--cart-count",`"${cartItems.length}"`);
}






































































































































































































