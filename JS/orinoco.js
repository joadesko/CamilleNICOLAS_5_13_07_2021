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

  clone.getElementById('cardImg').src = product.imageUrl
  clone.getElementById('cardTitle').textContent = product.name
  clone.getElementById('cardPrice').textContent = product.price
  clone.getElementById('cardDescription').textContent = product.description
  clone.getElementById('btn').href = `product.html?id=${product.id}`


  document.getElementById('productsList').appendChild(clone)
}