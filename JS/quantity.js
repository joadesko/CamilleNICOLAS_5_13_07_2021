//EventListener boutons quantité
let parentClicks = 0;
let childClicks = 0;

document
  .getElementById("plus")
  .addEventListener("click", function() {
  document
    .getElementById("plusOrMinusClick")
    .innerText = (++parentClicks) + '';
});

document
  .getElementById("minus")
  .addEventListener("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  document
    .getElementById("plusOrMinusClick")
    .innerText = (--parentClicks) + '';
});
