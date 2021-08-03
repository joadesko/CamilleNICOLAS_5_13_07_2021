//Ma structure HTML
function buildCameraProduct(camera){
    return `
    <div class="infoProduct">
        <div class="product">
            <img id="cardImgProduct" src="${camera.imageUrl}" alt="Card image cap">
            <div class="cardBodyProduct">
                <h5 id="cardTitleProduct">${camera.name}</h5>
                    <p id="cardDescriptionProduct">${camera.description}</p>
                    <p id="cardPriceProduct">${camera.price / 100}.00 €</p>
                        <div class="quantity">
                            <i class="fas fa-plus-circle"></i>
                            <i class="fas fa-minus-circle"></i>
                        </div> 
                        <div class="choice" role="search" aria-label="Choix du produit">
                            <label class="font-weight-bold" tabindex="0">Choisir un optique :</label>
                                <select id="cardLenses" name="lenses" class="cardLensesProduct">
                                ${camera.lenses.map(lense => `<option> ${lense}</option>`)}
                        </div>
                        
                                
            </div>
        </div>  
    </div>`;
}

