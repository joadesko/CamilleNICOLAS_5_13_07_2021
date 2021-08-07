/*function getItemLocalStorage() {
    let cameraImage = localStorage.getItem('camera.imageUrl');
    let cameraName = localStorage.getItem('camera.name');
    let cameraPrice = localStorage.getItem('camera.price');
    let cameraLenses = localStorage.getItem('lense');
    let cameraQuantity = localStorage.getItem('camera.quantity');
  
    document.getElementById('cardImgProductBasket').value = cameraImage;
    document.getElementById('cardTitleProductBasket').value =  cameraName;
    document.getElementById('cardPriceProductBasket').value = cameraPrice;
    document.getElementById('cardLensesBasket').value = cameraLenses;
    document.getElementById('cardQuantityBasket').value = cameraQuantity;
}

function getItem() { 
    const cameraId = new URL(location.href).searchParams.get("id");
    const url = `http://localhost:3000/api/cameras/${cameraId}`;
    fetch(url)
    .then((httpBodyResponse) => httpBodyResponse.json())
      .then((camera) =>{
        console.log(camera);
        hydratePage(camera);
        })
          .catch((error) => {
            alert(error)
          });  
  }
  
  getItem();
  
  function hydratePage(camera) {
    let mainContainerProduct = document.getElementById('addProductBasket');
    mainContainerProduct.innerHTML = buildCameraProduct(camera); 
  }*/

//Vérification de l'adresse mail
let email = document.querySelector('input-mail');
email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
e.target.setCustomValidity
alert("Entrez une adresse valide. Exemple : contact@nom.com");
		}
	}
};