//----------------------------------Structure du panier----------------------------------------------//
const buildAddProductBasket = (selectedCamera) => {

    const positionBasket = document.querySelector("#getProductFromLocalStorageToBasket");
    
    if(selectedCamera){     
    const structureBasket = `
    <div class="addProductInCart">
        <div class="imgUrlSelectedProductBasket">${selectedCamera.imageUrl}</div>  
            <h5 id="TitleSelectedProductBasket">${selectedCamera.name}</h5> 
                <p id="PriceSelectedProductBasket">${(selectedCamera.price / 100)*quantity}</p>  
                <p id="LensesSelectedProductBasket">${selectedCamera.lense}</p> 
                <p id="QuantitySelectedProductBasket">${selectedCamera.quantity}</p>                                     
    </div>
   `
    ;

    positionBasket.insertAdjacentHTML("afterend", structureBasket);
    }


};

buildAddProductBasket();



//--------------------------Affichage si le panier est vide ou plein----------------------------------//
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

//--------------------------------Bouton icone pour supprimer une camera du panier--------------------------------//

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

for (let m = 0; m < productSaveInLocalStorage.length; m++){
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