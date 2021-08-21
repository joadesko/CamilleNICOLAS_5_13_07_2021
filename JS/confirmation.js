//-----------------------------------------Récupération de l'id de la commande sur le localStorage----------------------------------------//
const orderIdRecovery = JSON.parse(localStorage.getItem('order'));
console.log(orderIdRecovery);

//Affichage de la structure HTML de l'id de commande
const orderIdDisplay = () => {

    const positionOrderId = document.getElementById("#order-id-display");

    const structureOrderId = `
    <p class="pIdOrder" tabindex="0">Numéros de votre commande :<strong>${orderId}</strong></p>
    `;

    positionOrderId.insertAdjacentHTML("afterend", structureOrderId);

};

orderIdDisplay();

//----------------------------------------------Retour de l'affiche du prix total de la commande-------------------------------------------//
//Afficher le prix total de la commande
const basketDisplay = document.getElementById("divTotalPrice");
const totalPriceDisplay = `
<div id="total-price" class="total-cart-price"> Le prix total de vos achats est de : ${totalPrice}.00€</div>
`
basketDisplay.insertAdjacentHTML("beforeend", totalPriceDisplay);
