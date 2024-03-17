import { createNotification } from "./notifications-view.js";

export function notificationController(notificationContainer) {
  function showNotifications(message, type = 'success'){
    const notification = document.createElement('div');
    notification.innerHTML = createNotification(message);
    notification.classList.add('notification', type);
    notificationContainer.appendChild(notification);
  }

  return {showNotifications};
}