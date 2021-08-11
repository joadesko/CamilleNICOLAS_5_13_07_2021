//Convertir les données en Stringify du localStorage vers basket.js 
localStorage.getItem('myBasket', basket);


const basketDisplay = document.querySelector("#addProductInCart");
console.log(basketDisplay);

let productDisplayCart = [];


//Sélection de toutes les références des boutons icones supprimer
let btnSupprimer = document.querySelectorAll(".btn-supprimer")
console.log(btnSupprimer)

//Id du produit qui va être supprimer en cliquant sur le bouton
for (let l = 0; 1 < btnSupprimer.length; l++){
  btnSupprimer[l].addEventListener("click" , (event) =>{
    event.preventDefault();

    let id_selection_suppression = productSaveInLocalStorage[l].selectedCamera._id;
    console.log("id_selection_suppression");
    console.log(id_selection_suppression);

    productSaveInLocalStorage = productSaveInLocalStorage.filter( el => el.selectedCamera._id !== id_selection_suppression);
    console.log(id_selection_suppression)

    localStorage.setItem("mybasket", JSON.stringify(productSaveInLocalStorage));
    alert("La caméra a été supprimer")
    window.location.href = "basket.html";

  })
};
//Vérification de l'adresse mail
let email = document.getElementById("input-mail");
email.invalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity
alert("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};