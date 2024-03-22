export async function createUser(email, password) {
  const url = 'http://localhost:8000/auth/register';
  const data = {username: email, password: password};
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  )
  
  if (!response.ok) throw 'Error al crear usuario';
}