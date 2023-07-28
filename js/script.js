/*
let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginForm = document.querySelector(".login-form");

document.getElementById("search-btn").onclick = () =>{
    shoppingCart.className = "shopping-cart";
    loginForm.className = "login-form";
    searchForm.classList.toggle("active");
};


document.getElementById("cart-btn").onclick = () =>{
    searchForm.className = "search-form";
    loginForm.className = "login-form";
    shoppingCart.classList.toggle("active");
};



document.getElementById("login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    searchForm.className = "search-form";
    shoppingCart.className = "shopping-cart";
}
*/

function showbox(classBox, btn){
    const removeBoxes = [".shopping-cart", ".login-form",".navbar", ".search-form"];
    let targetbox = document.querySelector(classBox);
    
    document.getElementById(btn).onclick = () =>{

        removeBoxes.forEach(x =>{
           
            document.querySelector(x).classList.remove("active");
        })
        
        targetbox.classList.toggle("active");
        window.onscroll = () =>{
            targetbox.classList.remove("active");
        };
    };
   

};

showbox(".search-form", "search-btn");
showbox(".shopping-cart", "cart-btn");
showbox(".login-form", "login-btn");
showbox(".navbar", "menu-btn");
