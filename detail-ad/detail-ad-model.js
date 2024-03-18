export async function getAdData(adId) {
  const url = `http://localhost:8000/api/ads/${adId}`

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) throw 'Error obteniendo el anuncio';
    return parseData(data);
    
  } catch (error) {
    throw error;
  }
}

function parseData(data) {
  return {
    id: data.id,
    idUser: data.idUser,
    image: data.image,
    onSale: data.onSale,
    price: data.price,
    name: data.name,
    description: data.description
  }
}