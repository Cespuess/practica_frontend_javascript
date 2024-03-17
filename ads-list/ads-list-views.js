export function designAds(ad) {
  return `
    <img src="${ad.image}" alt="${ad.name}">
    <p>${ad.onSale ? "Se vende" : "Se compra"} </p>    
    <p>${ad.price}€</p>
    <p>${ad.name}</p>
    <p>${ad.description}</p>
  `  
}

export function emptyAds() {
  return '<h3> No hay anuncios disponibles en este momento. </h3>'
}

