(async () => {
  const products = await getProducts()
  hydratePage(products)
})()

async function getProducts() {
  return fetch('http://localhost:3000/api/cameras')
    .then((httpBodyResponse) => httpBodyResponse.json())
    .then((products) =>{
      let productsList = [];
      products.forEach(element => {
        productsList.push (new Camera(element));
      });
      return productsList;
    })
    .catch((error) => {
      alert(error)
    })
}

function hydratePage(products) {
  //document.getElementById('productsList').innerHTML = '';
  let mainContainer = document.getElementById('productsList');

  products.forEach((product) => {
    mainContainer.innerHTML += buildCamera(product); 
  })
}

function displayProduct(product) {
  
  const template = document.getElementById('product')

  
  const clone = document.importNode(template.content, true)

  
  clone.getElementById('productImage').src = product.imageUrl
  clone.getElementById('productName').textContent = product.name
  clone.getElementById('productPrice').textContent = product.price
  clone.getElementById('productDescription').textContent = product.description
  clone.getElementById('productLink').href = `produit.html?id=${Camera.id}`

  
  document.getElementById('productsList').appendChild(clone)
}
