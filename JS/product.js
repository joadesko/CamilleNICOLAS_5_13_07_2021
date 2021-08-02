//function onClickProduct(productId){
// getProduct(productId);
//}
getCamera();

/*function getProductId(){
  return new URL(location.href).searchParams.get("id");
}*/

function getCamera() { 
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

function hydratePage(camera) {
  let mainContainerProduct = document.getElementById('cardProduct');
  mainContainerProduct.innerHTML = buildCameraProduct(camera); 
}


/*function displayOneProduct (product) {

  const buildCameraProduct = document.getElementById('product')

  const document = document.importNode(buildCameraProduct.content, true)

  document.getElementById ("cardImg").src = product.imageUrl;
  document.getElementById ("cardTitle").textContent = product.name;
  document.getElementById ("cardDescription").textContent = product.description;
  document.getElementById ("cardPrice").textContent = product.price;
  document.getElementById ("cardLenses").textContent = product.lenses;
  
}*/
