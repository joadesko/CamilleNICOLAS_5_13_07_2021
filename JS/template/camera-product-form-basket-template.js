//----------------------------------Structure du panier----------------------------------------------//
const buildAddProductBasket = (selectedCamera) => {
   
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

    basketDisplay.insertAdjacentHTML("afterend", structureBasket);
    }


};

buildAddProductBasket();



//------------------------------------------------Structure du formulaire------------------------------------//
const form = () => {

    const positionForm = document.querySelector("#form");

    const structureFormulaire = `
    <form name="orderForm" class="form-order" method="POST" action="confirmation.html" role="search" aria-label="Formulaire">
        <h4 class="formTitle">Merci de complèter ce formulaire pour valider la commande :</h4>
            <div class="input-form">
                <div class="name">
                    <input type="text" id="lastName" name="lastName" class="input" pattern="[a-zA-ZÀ-ÿ]{5}" title="Votre nom de famille" placeholder="Nom" aria-labelledby="Nom" required>
                    <input type="text" id="firstName" name="firstName" class="input" pattern="[a-zA-ZÀ-ÿ]{5}" title="Votre prénom" placeholder="Prénom" aria-labelledby="Prénom" required>
                </div>
                <div class="address">
                    <input type="text" id="adress" name="adress" class="input-address" pattern="[a-zA-ZÀ-ÿ]{5}" title="Votre adresse postale" placeholder="Adresse" aria-labelledby="Adresse" required>
                </div>
                <div class="cp">
                    <input type="text" id="postCode" name="postCode" class="input" pattern="[0-5]* title="Le code postale" placeholder="Code Postale" aria-labelledby="Code Postale" required>
                    <input type="text" id="city" name="city" class="input" pattern="[a-zA-ZÀ-ÿ]{5}" title="La ville" placeholder="Ville" aria-labelledby="Ville" required>
                </div>
                <div class="tel-mail">
                    <input type="tel" id="tel" name="tel" class="input-tel" pattern="[0-9]*" inputmode=“numeric” title="Merci de nous communiquer votre numéro de téléphone" placeholder="Téléphone" aria-labelledby="Téléphone" required>
                    <input type="email" id="email" name="email" class="input-mail" pattern="[a-zA-ZÀ-ÿ]{5}" title="Merci de nous communiquer votre adresse mail"  placeholder="E-mail" required>
                </div>
                <div class="commentary">
                    <textarea type="text" id="commentary" name="commentary" class="input-commentary" maxlength="200" title="Informations complémentaires" placeholder="Informations complémentaires à la livraison" aria-labelledby="Informations complementaires"></textarea>
                </div>
            </div>
    </form>
    `;

    positionForm.insertAdjacentHTML("afterend", structureFormulaire);

};

form();


//--------------------------------------------Validation des champs du formulaire-----------------------------------------//


//---------------------------------------------Vérification de l'adresse mail---------------------------------------------//
/*let email = document.getElementById("input-mail");
email.invalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity
alert("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};*/