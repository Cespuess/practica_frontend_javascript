import { detailAdController } from "./detail-ad/detail-ad-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const notificationsContainer = document.querySelector('.notifications-container');
  const detailContainer = document.querySelector('.detail-container');

  detailContainer.addEventListener('detailAd-notifications', (e) => {
    e.stopPropagation();
    const { showNotifications } = notificationController(notificationsContainer);
    showNotifications(e.detail.message, e.detail.type);
  })

  detailAdController(detailContainer);
})

window.addEventListener('offline', () => {
  alert('Has perdido la conexión');
  })