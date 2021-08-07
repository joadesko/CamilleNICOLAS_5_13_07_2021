//sélection de l'id du produit
const idProduct = document.querySelectorAll(".cardBodyProduct");

//variables par ID pour la récupération des données du produit
const name = document.getElementById("cardTitleProduct")
const price = document.getElementById("cardPriceProduct")
const lense = document.getElementById("cardLenses")
const quantity = document.getElementById("plusOrMinusClick")

//sélection du bouton ajouter le produit au panier
const btn_addCart = document.querySelector(".form-button");
console.log(btn_addCart);

//écouter le bouton et envoyer le panier
btn_addCart.addEventListener("click", (event) =>{
    event.preventDefault();

//Choix de l'utilisateur
const choiceProduct = idProduct;
console.log(choiceProduct);

//récupérer les données sélectionnées
let optionProduct = {
    name: choiceProduct.name,
    price: choiceProduct.price / 100,
    lense: choiceProduct.lense,
    quantity: choiceProduct.quantity,
}
console.log(optionProduct)
});


//convertir les données en JSON dans le localstorage en objet JS
let productSaveInLocalStorage = JSON.parse(localStorage.getItem("camera"));
console.log(productSaveInLocalStorage);

  