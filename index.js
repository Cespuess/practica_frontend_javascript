import { adsListController } from "./ads-list/ads-list-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.querySelector('.ads-list');
  const sessionbar = document.querySelector('#session');
  const notificationsContainer = document.querySelector('.notifications-container');
  
  sessionController(sessionbar);
  
  const { showNotifications } = notificationController(notificationsContainer);
  
  adsList.addEventListener('getAdsErrors', (e) => {
    showNotifications(e.detail.message, e.detail.type);
    e.stopPropagation();
  })
  adsListController(adsList);
})

window.addEventListener('offline', () => {
  alert('has perdido la conexión');
})
