import { adsListController } from "./ads-list/ads-list-controllers.js";

document.addEventListener('DOMContentLoaded', () => {
  const adsList = document.querySelector('.ads-list');
  const session = document.querySelector('#session');
  const notificationsList = document.querySelector('.notifications-container');
  
  adsListController(adsList); 


})
