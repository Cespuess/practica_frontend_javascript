import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  const notificationsContainer = document.querySelector('.notifications-container');
  
  loginForm.addEventListener('login-notifications', (e) => {
    e.stopPropagation();
    const { showNotifications } = notificationController(notificationsContainer);
    showNotifications(e.detail.message, e.detail.type);
  }) 
  
  loginController(loginForm);
})




