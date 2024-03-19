export function renderAd(adData) {
return ` 
  <img src="${adData.image}" alt="${adData.name}">
  <p class="ad__onSale">${adData.onSale ? "Se vende" : "Se compra"} </p>    
  <p class="ad__price">${adData.price}€</p>
  <p class="ad__name">${adData.name}</p>
  <p class="ad__description">${adData.description}</p>
`
}

export function renderDeleteButton() {
  return '<button id = "deletebutton"> Borrar Anuncio </button>'
}