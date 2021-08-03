class Camera{
    constructor(product) {
        this.id = product._id;
        this.name = product.name;
        this.price =`${product.price / 100}.00 €`;
        this.description = product.description;
        this.imageUrl = product.imageUrl;
        this.lenses = product.lenses;
    }
}