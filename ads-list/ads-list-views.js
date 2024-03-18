export function designAds(ad) {
  return `
    <a class="ad" href="detail-ad.html?adId=${ad.id}">
      <img src="${ad.image}" alt="${ad.name}">
      <p class="ad__onSale">${ad.onSale ? "Se vende" : "Se compra"} </p>    
      <p class="ad__price">${ad.price}€</p>
      <p class="ad__name">${ad.name}</p>
      <p class="ad__description">${ad.description}</p>
    </a>
  `  
}

export function emptyAds() {
  return '<h3> No hay anuncios disponibles en este momento. </h3>'
}

