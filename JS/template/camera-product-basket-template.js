function buildAddProductBasket(camera){
    return `
    <div class="addProductInCart">
        <div class="addProduct">
            <img id="ImgProductBasket" src="${camera.imageUrl}" alt="Card image cap">
            <div class="cartTotal">
                <h5 id="TitleProductBasket">${camera.name}</h5>
                    <p id="PriceProductBasket">${camera.price / 100}.00 €</p>
                    <p id="LensesBasket">${lense}</p> 
                    <p id="QuantityBasket">${camera.quantity}</p>                              
            </div>
            <i class="far fa-trash-alt btn-supprimer"></i>
        </div>  
    </div>`;
}