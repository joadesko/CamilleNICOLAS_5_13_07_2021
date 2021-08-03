function buildCameraProduct(camera){
    return `
    <div class="p-2">
        <div class="card" style="width: 18rem;">
            <img id="cardImg" src="${camera.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 id="cardTitle">${camera.name}</h5>
                    <p id="cardDescription">${camera.description}</p>
                    <p id="cardPrice">${camera.price}</p>
            </div>
        </div>
        <div class="choice" role="search" aria-label="Choix du produit">
            <label class="font-weight-bold" tabindex="0">Optique :</label>
            <select name="lenses">
                <option value="lenses" id="cardLenses" tabindex="0">${camera.lenses}</option>
            </select>
        </div>
        <div>
            <label class="font-weight-bold" tabindex="0">Quantité :</label>
                <select name="quantity" id="quantity">
                    <option value="" tabindex="0">
                    
                    </option>
                </select>
        </div>
    </div>`;
}