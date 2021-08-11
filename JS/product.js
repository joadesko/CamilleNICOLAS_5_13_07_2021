//Création d'une variable pour la caméra sélectionné
let selectedCamera;

//Récupération de l'id du produit
function getCamera() { 
  const cameraId = new URL(location.href).searchParams.get("id");
  const url = `http://localhost:3000/api/cameras/${cameraId}`;
  fetch(url)
  .then((httpBodyResponse) => httpBodyResponse.json())
    .then((camera) =>{
      selectedCamera = camera;
      console.log(camera);
      hydratePage();
      })
        .catch((error) => {
          alert(error)
        });  
}

//Faire appel à la fonction
getCamera();

//Hydrater la page
function hydratePage() {
  if(selectedCamera){
    let mainContainerProduct = document.getElementById('cardProduct');
    mainContainerProduct.innerHTML = buildCameraProduct(selectedCamera); 
    buildCameraLensesSelectList(selectedCamera.lenses);
  }
}

//sélection du bouton ajouter le produit au panier
const btn_addCart = document.querySelector("#add_product_to_basket");
console.log(btn_addCart);

//écouter le bouton et envoyer le panier
btn_addCart.addEventListener("click", (event) =>{
    event.preventDefault();

  let selectLenses = document.getElementById("cameraLenses");
  console.log('valeur selectionne == > ' + selectLenses.value);

  const quantity = document.getElementById("plusOrMinusClick").valueAsNumber;
  console.log(quantity);

  //récupérer les données sélectionnées
  let productAdd = {
      id: selectedCamera._id,
      name: selectedCamera.name,
      price: (selectedCamera.price / 100)*quantity,
      lense: selectLenses.value,
      quantity
  }
  console.log(productAdd);

  //envoyer les données sélectionnnées au localStoraga
  let basket = localStorage.getItem('myBasket');
  if (basket){
  }else{
    basket = [];
  }

  //Chercher si le produit déjà existant dans le localStorage
  function findProductInBasket(camera){
    return camera.id === productAdd.id;
  }

  const add2Product = inventaire.find( product => product.id === productToAdd.id);
  if (add2Product){
    add2Product.quantity = add2Product.quantity + productAdd.quantity;
    add2Product.price = add2Product.price + productAdd.price;
  }else{
    basket.push(productAdd);
  }

  localStorage.setItem('myBasket', basket);

  //convertir les données en JSON dans le localstorage en objet JS
  let productSaveInLocalStorage = JSON.parse(localStorage.getItem('myBasket'));
  console.log(productSaveInLocalStorage);
});