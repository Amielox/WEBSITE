// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.onclick = () => {
	cart.classList.add("active");

};
//closecart
closeCart.onclick = () => {
	cart.classList.remove("active");
};

// cart working js
if (document.readyState == 'loading') {
	document.addEventListener("DOMContentLoader", ready);
} else {
	ready();

}

