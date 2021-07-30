(async function () {
    const articleId = getArticleId
    const article = await getArticle(articleId)
    hydrateArticle (article)
})()

function getArticleId(){
    return new URL(location.href).searchParams.get("id")
}

function getArticle(articleId){
    async function getProducts() {
        return fetch('http://localhost:3000/api/cameras/${articleId}')
          .then((httpBodyResponse) => httpBodyResponse.json())
          .then((products) => products)
          .catch((error) => {
            alert("error")
          })
      }
}

function hydrateArticle(article){
    document.getElementById('productImage').src = product.imageUrl
    document.getElementById('productName').textContent = product.name
    document.getElementById('productPrice').textContent = `${product.price / 100}.00 €`
    document.getElementById('productDescription').textContent = product.description
}