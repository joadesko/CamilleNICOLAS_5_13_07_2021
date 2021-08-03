function buildCameraProduct(camera){
    return `
    <div class="infoProduct">
        <div class="product">
            <img id="cardImgProduct" src="${camera.imageUrl}" alt="Card image cap">
            <div class="cardBodyProduct">
                <h5 id="cardTitleProduct">${camera.name}</h5>
                    <p id="cardDescriptionProduct">${camera.description}</p>
                    <p id="cardPriceProduct">${camera.price / 100}.00 €</p>
                        <div class="choice" role="search" aria-label="Choix du produit">
                            <label class="font-weight-bold" tabindex="0">Choisir un optique :</label>
                                <select size ="1" id="cardLenses" name="lenses" class="cardLensesProduct dropdown-toggle">
                                    <option value="0" tabindex="0">${camera.lenses}</option>
                                    <option value="1" tabindex="0">${camera.lenses}</option>
                                    <option value="2" tabindex="0">${camera.lenses}</option>
                                    <option value="3" tabindex="0">${camera.lenses}</option>
                                </select>
                        </div>
                            <div>
                                <label class="font-weight-bold" tabindex="0">Quantité :</label>
                                    <select name="quantity" id="quantity">
                                        <option value="" tabindex="0">
                                        
                                        </option>
                                    </select>
                            </div>
            </div>
        </div>  
    </div>`;
}