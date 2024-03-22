import { notificationController } from "./notifications/notifications-controller.js";
import { signupController } from "./signup/signup-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.register-form');
  const notificationsContainer = document.querySelector('.notifications-container');
  
  registerForm.addEventListener('register-notifications', (e) => {
    e.stopPropagation();
    const { showNotifications } = notificationController(notificationsContainer);
    showNotifications(e.detail.message, e.detail.type);
  }) 
  
  signupController(registerForm);
})

window.addEventListener('offline', () => {
  alert('Has perdido la conexión');
  })

