import { adsListController } from "./ads-list/ads-list-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.querySelector('.ads-list');
  const sessionbar = document.querySelector('#session');
  const notificationsList = document.querySelector('.notifications-container');
  
  sessionController(sessionbar);
  adsListController(adsList); 
})

window.addEventListener('offline', () => {
  alert('has perdido la conexión');
})
