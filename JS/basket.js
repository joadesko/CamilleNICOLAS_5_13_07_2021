//------------------------------------------------Récupération des produits du localStorage-----------------------------------------------//
const myBasket = localStorage.getItem('myBasket');

//-------------------------------------------------------------Structure du panier--------------------------------------------------------//
const basketDisplay = document.querySelector("#getProductFromLocalStorageToBasket")

//-------------------------------------------Envoi du formulaire et du panier validé---------------------------------//

//Envoie des données saisie dans le formulaire
localStorage.setItem(document.querySelector("#name").value);
console.log(document.querySelector("#name").value);

//sélection du bouton validation commande
const btn_valid_order = document.querySelector("#validOrder");
console.log(btn_valid_order);

//écouter le bouton et envoyer le panier
/*btn_valid_order.addEventListener("click", (event) =>{
    event.preventDefault();

    //Sélection des inputs du formulaire
    let lastName = document.getElementById("lastNameInput").value
      let firstName = document.getElementById("firstNameInput").value
      let adress = document.getElementById("adressInput").value
      let cp = document.getElementById("cpInput").value
      let city = document.getElementById("cityInput").value
      let tel = document.getElementById("telInput").value
      let mail = document.getElementById("mailInput").value
      let commentary = document.getElementById("commentaryInput").value
    

  //Création d'un tableau des données saisies du formulaire
  let form = {
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