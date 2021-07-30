function buildCamera(camera){
    return `<div class="p-2">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${camera.imageUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${camera.name}</h5>
                    <p class="card-text-description">${camera.description}</p>
                    <p class="card-text-price">${camera.price}</p>
                    <a href="produit.html?id=${camera.id}" class="btn btn-primary">Voir l'article</a>
            </div>
        </div>
    </div>`;

}