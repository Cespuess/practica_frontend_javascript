import { priceFormat } from "../utils/functions.js";

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
    userId: data.userId,
    image: data.image,
    onSale: data.onSale,
    price: priceFormat(data.price),
    name: data.name,
    description: data.description
  }
}

export async function getUserData() {
  const url = 'http://localhost:8000/auth/me'
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json();
    return parseUserData(data);    
        
  } catch (error) {
    throw 'Error en la comprobación del usuario creador del anuncio.';
  }

  function parseUserData(data) {
    return {
      userId: data.id
    }
  }
}

export async function deleteAd(id) {
  const url = `http://localhost:8000/api/ads/${id}`
  const token = localStorage.getItem('token');
  const errorDelete = 'Error borrando el anuncio.'

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }      
    })
    if (!response.ok) throw errorDelete;

  } catch (error) {
    throw errorDelete;
  }

}