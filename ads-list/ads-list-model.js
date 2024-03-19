import { priceFormat } from "../utils/functions.js";

export async function getAds () {
  const url = 'http://localhost:8000/api/ads';
  let ads = [];

  try {
    const response = await fetch(url);
    const data = await response.json();
    ads = parseAds(data);
  } catch (error) {
    throw new Error('Error obteniendo los anuncios');
  }
  
  return ads;
}

function parseAds(data) {
  return data.map(data => ({
    id: data.id,
    name: data.name,
    onSale: data.onSale,
    price: priceFormat(data.price),
    description: data.description,
    image: data.image,
    userId: data.userId
  }))
}