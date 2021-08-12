//------------------------------------------------Récupération des produits du localStorage-----------------------------------------------//
const myBasket = localStorage.getItem('myBasket');

//-------------------------------------------------------------Structure du panier--------------------------------------------------------//
const basketDisplay = document.querySelector("#getProductFromLocalStorageToBasket")

if(myBasket === null){
  //si panier est vide
  const emptyBasket =`
  <div class="empty-basket">
    <p> Votre panier est vide !</p>
  </div>
  `;
  basketDisplay.innerHTML = emptyBasket;
} else{
  //si panier n'est pas vide
  let structureProductBasket = [];
  
  for(k = 0; k < productSaveInLocalStorage.length; i++ ){
    structureProductBasket = structureProductBasket + `
    <div class="full-basket">
      <div>${productSaveInLocalStorage[k].imageUrl} ${productSaveInLocalStorage[k].name} ${productSaveInLocalStorage[k].price} ${productSaveInLocalStorage[k].lense} ${productSaveInLocalStorage[k].quantity} <i class="far fa-trash-alt btn-supprimer"></i></div>
    </div>`;  
  }
  if (k === productSaveInLocalStorage.length){
    basketDisplay.innerHTML =  structureProductBasket;
  }
}

//Sélection de toutes les références des boutons icones supprimer
let btnSupprimer = document.querySelectorAll(".btn-supprimer")
console.log(btnSupprimer)

//Id du produit qui va être supprimer en cliquant sur le bouton
for (let l = 0; l < btnSupprimer.length; l++){
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

//---------------------------------------------Calcul du prix total-------------------------------------------------------//
let totalPriceCalcul = [];

/*for (let m = 0; m < productSaveInLocalStorage.length; m++){
  let totalPriceInBasket = productSaveInLocalStorage[m].price;

  totalPriceCalcul.push(totalPriceInBasket);
  console.log(totalPriceInBasket);
}
//---------------------------------------------Addition des prix----------------------------------------------------//
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = totalPriceCalcul.reduce(reducer,0);
console.log(totalPrice)

//---------------------------------------------Afficher le prix total---------------------------------------------------//
const totalPriceDisplay = `
<div class="total-cart-price"> Le prix total est de : ${totalPrice}</div>
`
basketDisplay.insertAdjacentHTML("beforeend", totalPriceDisplay)


//----------------------------------------------Validation des champs du formulaire-----------------------------------------//
//Nom

//---------------------------------------------Vérification de l'adresse mail---------------------------------------------//
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

//-------------------------------------------Envoi du formulaire et du panier validé---------------------------------//

//Envoie des données saisie dans le formulaire
localStorage.setItem(document.querySelector("#name").value);
console.log(document.querySelector("#name").value);

//sélection du bouton validation commande
const btn_valid_order = document.querySelector("#validOrder");
console.log(btn_valid_order);

//écouter le bouton et envoyer le panier
btn_valid_order.addEventListener("click", (event) =>{
    event.preventDefault();

    //Sélection des inputs du formulaire
    /* let lastName = document.getElementById("lastNameInput").value
      let firstName = document.getElementById("firstNameInput").value
      let adress = document.getElementById("adressInput").value
      let cp = document.getElementById("cpInput").value
      let city = document.getElementById("cityInput").value
      let tel = document.getElementById("telInput").value
      let mail = document.getElementById("mailInput").value
      let commentary = document.getElementById("commentaryInput").value
    */

  //Création d'un tableau des données saisies du formulaire
  /*let form = {
    lastName : 
    firstName :
    adress :
    cp :
    city :
    tel :
    mail :
    commentary :
  }
  console.log(form);

  //envoyer les données sélectionnnées au localStorage
  let validBasket = localStorage.getItem('myOrder');
  if (validBasket){
  }else{
    validBasket = [];
  }

  localStorage.setItem('myOrder');

  //Convertir les données en JSON dans le localStorage en objet JS
  let orderSaveInLocalStorage = JSON.parse(localStorage.getItem ('myOrder'));
  console.log(orderSaveInLocalStorage);
});*/