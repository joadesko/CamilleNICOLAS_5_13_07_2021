//Récuperation du panier
const basketRecovery = JSON.parse(localStorage.getItem('myBasket'));
basketRecovery.forEach((item) => {
  const basketDisplay = document.getElementById("getProductFromLocalStorageToBasket");

  let structureProductBasket = [];

    for(k = 0; k < basketRecovery.length; k++ ){
      structureProductBasket = structureProductBasket + ` 
      <div class="full-basket">
        <div><img src=${basketRecovery[k].imageUrl.scr}/></div>
        <div><p>${basketRecovery[k].name}</p></div>
        <div><p>${basketRecovery[k].price}.00€</p></div> 
        <div><p>x${basketRecovery[k].quantity}</p></div>
        <i class="far fa-trash-alt btn-supprimer"></i></div>
      </div>`;  
    }
    if (k ==  basketRecovery.length){
      basketDisplay.innerHTML =  structureProductBasket;
    }
});

//-------------------------------------------------------------Calcul du prix total---------------------------------------------------------------//
let totalPriceCalcul = [];

for (let m = 0; m < basketRecovery.length; m++){
let totalPriceInBasket = basketRecovery[m].price;

totalPriceCalcul.push(totalPriceInBasket);

}
//-----------------------------------------------------Addition des prix si plusieurs produits-------------------------------------------------------//
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPrice = totalPriceCalcul.reduce(reducer,0);
console.log(totalPrice)

//--------------------------------------------------------------Afficher le prix total---------------------------------------------------------------//
const basketDisplay = document.getElementById("getProductFromLocalStorageToBasket");
const totalPriceDisplay = `
<div class="total-cart-price"> Le prix total est de : ${totalPrice}.00€</div>
`
basketDisplay.insertAdjacentHTML("beforeend", totalPriceDisplay)




//----------------------------------------------------------Envoie du panier et du formulaire--------------------------------------------------------//

//Fonction pour gérer la soumission du formulaire
function handleSubmit(event) {
  //Récupération des données saisie dans le formulaire
  event.preventDefault();
  const data = new FormData(event.target);
  const lastName = data.get('lastName');
  const firstName = data.get('firstName');
  const adress = data.get('adress');
  const postCode = data.get('postCode');
  const city = data.get('city');
  const tel = data.get('tel');
  const email = data.get('email');
  const commentary = data.get('commentary');
  
  //Envoyer le panier et le contact avec la methode POST
  if(basketRecovery && basketRecovery.length > 0){
    //créer le contact
    const contact = new Contact(firstName, lastName, adress, city, postCode, tel, email, commentary);
    const order = new Order (contact, basketRecovery);
    //Après faire un POST en passant la variable order

  } else{
    //il faut arreter avant le processus si le panier est vide
    document.getElementById("seeBasket").addEventListener("click", function(event) {
      console.log("Merci de choisir un produit avant d'accèder à votre panier !");
      event.preventDefault();
    }, false);
  }
}