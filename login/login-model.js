export async function login(email, password) {
  const url = 'http://localhost:8000/auth/login';
  const bodyData = {username: email, password: password};

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    })
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    
    return data.accessToken;
  } catch (error) {
    if (error.message) throw new Error(error.message);
    else throw new Error(error);
  }
}