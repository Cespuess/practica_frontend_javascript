export function renderAd(adData) {
return ` 
  <img class="ad__content ad__image" src="${adData.image}" alt="${adData.name}">
  <p class="ad__content ad__onSale">${adData.onSale ? "Se vende" : "Se compra"} </p>    
  <p class="ad__content ad__price">${adData.price} €</p>
  <p class="ad__content ad__name">${adData.name}</p>
  <p class="ad__content">${adData.description}</p>
`
}

export function renderDeleteButton() {
  return '<button class="btn"> Borrar Anuncio </button>'
}