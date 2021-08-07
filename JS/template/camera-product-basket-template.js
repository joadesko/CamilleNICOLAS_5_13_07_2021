function buildAddProductBasket(camera){
    return `
    <div class="addCart">
        <div class="addProduct">
            <img id="cardImgProductBasket" src="${camera.imageUrl}" alt="Card image cap">
            <div class="cartTotal">
                <h5 id="cardTitleProductBasket">${camera.name}</h5>
                    <p id="cardPriceProductBasket">${camera.price / 100}.00 €</p>
                    <p id="cardLensesBasket">${lense}</p> 
                    <p id="cardQuantityBasket">${camera.quantity}</p>                              
            </div>
            <span class="cart-total"></span>
        </div>  
    </div>`;
}