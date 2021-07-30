function buildCamera(camera){
    return `
    <div class="p-2">
        <div class="card" style="width: 18rem;">
            <img id="cardImg" src="${camera.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 id="cardTitle">${camera.name}</h5>
                    <p id="cardDescription">${camera.description}</p>
                    <p id="cardPrice">${camera.price}</p>
                    <a href="product.html?id=${camera.id}" id="btn" class="btn-primary">Voir l'article</a>
            </div>
        </div>
    </div>`;

}