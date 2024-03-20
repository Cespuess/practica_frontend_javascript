export function createRegistredOptions() {
  return `
    <button class="btn" id="logout"> Cerrar sesión </button>
    <a href="./create-ad.html" class="btn"> Crear anuncio </a> 
  `
}

export function createUnregistredOptions() {
  return `    
      <a href="./login.html" class="btn"> Inicia sesión </a>
      <a href="./signup.html" class="btn"> Regístrate </a>
    `
}