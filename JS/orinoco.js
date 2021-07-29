/*if ("content" in document.createElement("template")){
    
    let template = querySelector("#productrow");

    let tbody = document.querySelector("tbody");
    let clone = document.importNode(template.content, true);
    let td = clone.querySelectorAll("td");
    td[0].textContent = "vcam_1.jpg";
    td[1].textContent = "Zurss 50S";
    td[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    td[3].textContent = "49900";

    tbody.appendChild(clone);

    let clone2 = document.importNode(template.content, true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "vcam_2.jpg";
    td[1].textContent = "Hirsch 400DTS";
    td[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    td[3].textContent = "309900";

    tbody.appendChild(clone2);

    let clone3 = document.importNode(template.content, true);
    td = clone3.querySelectorAll("td");
    td[0].textContent = "vcam_3.jpg";
    td[1].textContent = "Franck JS 105";
    td[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    td[3].textContent = "209900";

    tbody.appendChild(clone3);

    let clone4 = document.importNode(template.content, true);
    td = clone4.querySelectorAll("td");
    td[0].textContent = "vcam_4.jpg";
    td[1].textContent = "Kuros TTS";
    td[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    td[3].textContent = "159900";

    tbody.appendChild(clone5);

    let clone5 = document.importNode(template.content, true);
    td = clone5.querySelectorAll("td");
    td[0].textContent = "vcam_5.jpg";
    td[1].textContent = "Katatone";
    td[2].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    td[3].textContent = "59900";

    tbody.appendChild(clone5);


} else {
    template.innerHTML = "page introuvable"
}*/

/*function addProduct (cartBody,article){

    const div = document.createElement ("div");
    div.innerHTML = cartBody.name;
    div.setAttributte ("class","description-produit-1");


    const img = document.createElement ("img");
    img.setAttribute("src", cartBody.imageURL);
    img.setAttribute("width","100%");

    const description = document.createElement ("div");
    description.innerHTML = cartBody.description;

    const lenses = document.createElement ("p");
    lenses.innerHTML = "Choix des optiques :" + cartBody.lenses;

    const price = document.createElement ("p");
    price.innerHTML = cartBody.price +"€";

    const link = document.createElement ("a");
    link.setAttribute("href","produit.html?id=" + cartBody._id);

    article[1].appendChild(div);
    div.appendChild(link);
    link.appendChild(img);
    div.appendChild(description);
    div.appendChild(lenes);
    div.appendChild(price);

}*/


(async () => {
    const products = await getProducts()
    hydratePage(products)
  })()
  
  async function getProducts() {
    return fetch('http://localhost:3000/api/cameras')
      .then((httpBodyResponse) => httpBodyResponse.json())
      .then((products) => products)
      .catch((error) => {
        alert("Page introuvable")
      })
  }
  
  function hydratePage(products) {
    // Remove loading boxes
    document.getElementById('productsList').innerHTML = ''
  
    // Loop over all products and displays them
    products.forEach((product) => {
      displayProduct(product)
    })
  }
  
  function displayProduct(product) {
    // Get template
    const template = document.getElementById('product')
  
    // Clone template
    const clone = document.importNode(template.content, true)
  
    // Hydrate template
    clone.getElementById('productImage').src = product.imageUrl
    clone.getElementById('productName').textContent = product.name
    clone.getElementById('productPrice').textContent = `${product.price / 100}.00 €`
    clone.getElementById('productDescription').textContent = product.description
    clone.getElementById('productLink').href = `produit.html?id=${product._id}`
  
    // Display template
    document.getElementById('productsList').appendChild(clone)
  }
  