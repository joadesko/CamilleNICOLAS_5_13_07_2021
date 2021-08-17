//------------------------------------------------Structure du formulaire------------------------------------//
const form = () => {

    const positionForm = document.querySelector("#form");

    const structureFormulaire = `
    <form name="orderForm" class="form-order" onsubmit="handleSubmit(event)" role="search" aria-label="Formulaire">
        <h4 class="formTitle">Merci de complèter ce formulaire pour valider la commande :</h4>
            <div class="input-form">
                <div class="name">
                    <input type="text" id="lastName" name="lastName" class="contact" title="Votre nom de famille" placeholder="Nom" aria-labelledby="Nom" required>
                    <input type="text" id="firstName" name="firstName" class="contact" title="Votre prénom" placeholder="Prénom" aria-labelledby="Prénom" required>
                </div>
                <div class="address">
                    <input type="text" id="adress" name="adress" class="contact-address" title="Votre adresse postale" placeholder="Adresse" aria-labelledby="Adresse" required>
                </div>
                <div class="cp">
                    <input type="text" id="postCode" name="postCode" class="contact"  title="Le code postale" placeholder="Code Postale" aria-labelledby="Code Postale" required>
                    <input type="text" id="city" name="city" class="contact" title="La ville" placeholder="Ville" aria-labelledby="Ville" required>
                </div>
                <div class="tel-mail">
                    <input type="tel" id="tel" name="tel" class="contact-tel" inputmode=“numeric” title="Merci de nous communiquer votre numéro de téléphone" placeholder="Téléphone" aria-labelledby="Téléphone" required>
                    <input type="email" id="email" name="email" class="contact-mail" title="Merci de nous communiquer votre adresse mail"  placeholder="E-mail" required>
                </div>
                <div class="commentary">
                    <textarea type="text" id="commentary" name="commentary" class="commentary" maxlength="200" title="Informations complémentaires" placeholder="Informations complémentaires à la livraison" aria-labelledby="Informations complementaires"></textarea>
                </div>
            </div>
            <!--Bouton validé la commande-->
            <div class="btn-basket" role="button" aria-label="Bouton" tabindex="0">
                <button type="submit" id="validOrder" class="button">Validé la commande</button>
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