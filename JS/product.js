getCamera();

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

function logArrayLenses() {
  document.getElementById("cardLenses").selectedIndex;
}

logArrayLenses();

function hydratePage(camera) {
  let mainContainerProduct = document.getElementById('cardProduct');
  let lenses = document.querySelector('cardLenses')
  mainContainerProduct.innerHTML = buildCameraProduct(camera); 
}