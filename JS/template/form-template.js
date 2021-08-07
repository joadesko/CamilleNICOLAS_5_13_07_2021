//Formulaire
function form (){
    return `
    <form name="orderForm" class="form-order" role="search" aria-label="Formulaire">
        <h4 class="formTitle">Merci de complèter ce formulaire pour valider la commande :</h4>
            <div class="input-form">
                <div class="name">
                    <input type="text" pattern="[0-20]{,3}" id="input" placeholder="Nom" required>
                    <input type="text" pattern="[0-15]{,3}" name="Prénom" id="input" placeholder="Prénom" aria-labelledby="Prénom" required>
                </div>
                <div class="address">
                    <input type="text" pattern="[0-30]{,3}"name="Adresse" id="input-address" placeholder="Adresse" aria-labelledby="Adresse" required>
                </div>
                <div class="cp">
                    <input type="text" id="input" pattern="[0-5]{,3}" name="CP"  placeholder="Code Postale" aria-labelledby="Code Postale" required>
                    <input type="text" id="input" pattern="[0-20]{,3}" name="Ville" placeholder="Ville" aria-labelledby="Ville" required>
                </div>
                <div class="tel-mail">
                    <input type="tel" pattern="[0-9]{,4}" id="input-tel" name="Téléphone" placeholder="Téléphone" aria-labelledby="Téléphone" required>
                    <input type="email" id="input-mail" pattern="[0-20]{,3}"  placeholder="E-mail" required>
                </div>
                <div class="commentary">
                    <textarea type="text" maxlength="200" name="Commentaire" id="input-commentary" placeholder="Informations complémentaires à la livraison" aria-labelledby="Informations complementaires"></textarea>
                </div>
            </div>
    </form>`
};
