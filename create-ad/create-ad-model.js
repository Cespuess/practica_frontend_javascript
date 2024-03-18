export async function sendAdDataToServer(name, price, onSale, description, image) {
  const url = "http://localhost:8000/api/ads";
  const token = localStorage.getItem('token');
  const bodyData = { name, price, onSale, description, image}

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) throw new Error(error.message)
    else throw new Error('Error con la petición al servidor.');
  }
}