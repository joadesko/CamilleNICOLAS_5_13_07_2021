//Structure du panier
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