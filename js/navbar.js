let ecomNavSearchForm = document.querySelector(".ecomNav-search-form");
let ecomNavHeader = document.querySelector(".ecomNav-header");

document.querySelector("#ecomNav-search-btn").onclick = () => {
  ecomNavSearchForm.classList.toggle("active");
  ecomNavShoppingCart.classList.remove("active");
  ecomNavLoginForm.classList.remove("active");
  ecomNavNavbar.classList.remove("active");
};

let ecomNavShoppingCart = document.querySelector(".ecomNav-shopping-cart");

document.querySelector("#ecomNav-cart-btn").onclick = () => {
  ecomNavShoppingCart.classList.toggle("active");
  ecomNavSearchForm.classList.remove("active");
  ecomNavLoginForm.classList.remove("active");
  ecomNavNavbar.classList.remove("active");
};

let ecomNavLoginForm = document.querySelector(".ecomNav-login-form");

document.querySelector("#ecomNav-login-btn").onclick = () => {
  ecomNavLoginForm.classList.toggle("active");
  ecomNavSearchForm.classList.remove("active");
  ecomNavShoppingCart.classList.remove("active");
  ecomNavNavbar.classList.remove("active");
};

let ecomNavNavbar = document.querySelector(".ecomNav-navbar");

document.querySelector("#ecomNav-menu-btn").onclick = () => {
  ecomNavNavbar.classList.toggle("active");
  ecomNavSearchForm.classList.remove("active");
  ecomNavShoppingCart.classList.remove("active");
  ecomNavLoginForm.classList.remove("active");
};


