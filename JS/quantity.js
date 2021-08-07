//EventListener boutons quantité
let quantityClicks = 0;

document
  .getElementById("plus")
  .addEventListener("click", function() {
  document
    .getElementById("plusOrMinusClick")
    .innerText = (++quantityClicks) + '';
});

document
  .getElementById("minus")
  .addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  document
    .getElementById("plusOrMinusClick")
    .innerText = (--quantityClicks) + '';
});
