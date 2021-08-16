//------------------------------------------------Récupération des produits du localStorage-----------------------------------------------//
const productSaveInLocalStorage = JSON.parse(localStorage.getItem('myBasket'));

//------------------------------------------------Récupération de la structure du panier------------------------------------------------//
const basketDisplay = document.getElementById("getProductFromLocalStorageToBasket");

//-------------------------------------------------------Affichage du panier-----------------------------------------------------------//
if( productSaveInLocalStorage === null){
  //si panier est vide
  const emptyBasket =`
  <div class="empty-basket">
    <p> Votre panier est vide !</p>
  </div>
  `;
  basketDisplay.innerHTML = emptyBasket;
} else{
  //si panier n'est pas vide
  // Je voudrais afficher l'image, le nom, la quantité et un icone deleted pour enlever le produit du panier
  let structureProductBasket = [];
  
  for(k = 0; k < productSaveInLocalStorage.length; k++ ){
    structureProductBasket = structureProductBasket + `
    <div class="full-basket">
      <div>${productSaveInLocalStorage.imageUrl} ${productSaveInLocalStorage.name} ${productSaveInLocalStorage.price} ${productSaveInLocalStorage.quantity}<i class="far fa-trash-alt btn-supprimer"></i></div>
    </div>`;  
  }
  if (k ===  productSaveInLocalStorage.length){
    basketDisplay.innerHTML =  structureProductBasket;
  }
}

//----------------------------------------------Bouton icone pour supprimer une camera du panier-------------------------------------------//

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


//-------------------------------------------------------------Calcul du prix total---------------------------------------------------------------//
let totalPriceCalcul = [];

for (let m = 0; m < productSaveInLocalStorage.length; m++){
let totalPriceInBasket = productSaveInLocalStorage[m].price;

totalPriceCalcul.push(totalPriceInBasket);

}
//-----------------------------------------------------Addition des prix si plusieurs produits-------------------------------------------------------//
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = totalPriceCalcul.reduce(reducer,0);
console.log(totalPrice)

//--------------------------------------------------------------Afficher le prix total---------------------------------------------------------------//
const totalPriceDisplay = `
<div class="total-cart-price"> Le prix total est de : ${totalPrice}.00€</div>
`
basketDisplay.insertAdjacentHTML("beforeend", totalPriceDisplay)




//--------------------------------------------------------Récupération des données du formulaire------------------------------------------------------//





//-------------------------------------------------------Envoi du formulaire et du panier validé-------------------------------------------------//
function onSubmit (basket){
  //Sélection du bouton valider la commande
  const btn_valid_order = document.getElementById("validOrder")
  //écouter le bouton 
  btn_valid_order.addEventListener("click", (event) =>{

    event.preventDefault();

    //Récupération du nom de famille
    let lastName = document.getElementById("lastName");
    console.log(lastName.value);
    //Récupération du prénom
    let firstName = document.getElementById("firstName");
    console.log(firstName.value);
    //Récupération de l'adresse
    let adress = document.getElementById("adress");
    console.log(adress.value);
    //Récupération du code postale
    let postCode = document.getElementById("postCode");
    console.log(postCode.value);
    //Récupération de la ville
    let city = document.getElementById("city");
    console.log(city.value);
    //Récupération du tel
    let tel = document.getElementById("tel");
    console.log(tel.value);
    //Récupération de l'adresse email
    let email = document.getElementById("email");
    console.log(email.value);
    //Récupération des commentaires
    let commentary = document.getElementById("commentary");
    console.log(commentary.value);

    basket.push;
    
});
}

onSubmit()
