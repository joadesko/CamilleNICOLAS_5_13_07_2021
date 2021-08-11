function buildCameraProduct(camera){
    return `
    <div class="infoProduct">
        <div class="product">
            <img id="cardImgProduct" src="${camera.imageUrl}" alt="Card image cap">
            <div class="cardBodyProduct">
                <h5 id="cardTitleProduct">${camera.name}</h5>
                    <p id="cardDescriptionProduct">${camera.description}</p>
                    <p id="cardPriceProduct">${camera.price / 100}.00 €</p>
                        <div class="choiceLenses" role="search" aria-label="Choix du produit">
                            <label class="font-weight-bold" tabindex="0">Choisir un optique :</label>
                                <select id="cameraLenses" class="lenses-product">
                                </select>
                        </div> 
                        <div id="quantity">
                                <a id="plus"><i class="fas fa-plus-circle"></i></a>
                                    <input type="number" id="plusOrMinusClick" value="1" min="1"/>
                                <a id="minus"><i class="fas fa-minus-circle"></i></a>
                        </div>                                
            </div>
        </div>  
    </div>`;
}

//Lenses
//Fonction pour le tableau "lenses" dans une balise <select>
function buildCameraLensesSelectList (lenses) {
    const optionList = document.querySelector("#cameraLenses").options;

    lenses.forEach(option =>
    optionList.add(
        new Option(option, option)
    )
    );
}


//Quantité
//EventListener boutons quantité
const quantityClicks = document.getElementById("plusOrMinusClick");

document
  .getElementById("plus")
  .addEventListener("click", function() {
document
    .getElementById("plusOrMinusClick")
    .value = quantityClicks.valueAsNumber +1;
});

document
  .getElementById("minus")
  .addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  if (quantityClicks.valueAsNumber == 1){
    return;
  }

document
    .getElementById("plusOrMinusClick")
    .value = quantityClicks.valueAsNumber -1;
});

