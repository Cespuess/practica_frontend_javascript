import { createAdController } from "./create-ad/create-ad-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";


document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('No puedes crear un anuncio sin estar registrado.')
    window.location.href = 'index.html';
  }  

  const createAdForm = document.querySelector('.create-form');
  const notificationsContainer = document.querySelector('.notifications-container')

  createAdForm.addEventListener('createAd-notifications', (e) => {
    e.stopPropagation();
    const { showNotifications } = notificationController(notificationsContainer);
    showNotifications(e.detail.message, e.detail.type);
  })

  createAdController(createAdForm);
}) 

window.addEventListener('offline', () => {
  alert('Has perdido la conexión');
  })