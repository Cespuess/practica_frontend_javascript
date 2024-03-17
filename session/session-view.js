export function createRegistredOptions() {
  return `
    <button class="sessionbar-btn" id="logout"> Cerrar sesión </button>
    <a href="./create-ad.html" class="sessionbar-btn id="createAd"> Crear anuncio </a> 
  `
}

export function createUnregistredOptions() {
  return `    
      <a href="./login.html" class="sessionbar-btn"> Inicia sesión </a>
      <a href="./signup.html" class="sessionbar-btn"> Regístrate </a>
    `
}