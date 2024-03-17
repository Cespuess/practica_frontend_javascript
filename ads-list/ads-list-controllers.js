import { getAds } from "./ads-list-model.js";
import { designAds, emptyAds } from "./ads-list-views.js";


export async function adsListController (adsList) {
  // DONE 1- recibir lista ads del servidor
  // DONE 2- parsear los datos
  // 3- prepararlos para la vista 
  // 4- mostrarlos en la página

  try {
    const ads = await getAds()
    console.log(ads);
    if (ads.length > 0) {
      showAds(ads, adsList);
    } else {
      showEmptyAds(adsList);
    }

  } catch (error) {
    alert(error);
  }
}

function showAds(ads, adsList) {
  ads.forEach(ad => {
    const adContainer = document.createElement('div');
    adContainer.innerHTML = designAds(ad); 
    console.log(adContainer);
    adsList.appendChild(adContainer);
  });
}

function showEmptyAds(adsList){
  adsList.innerHTML = emptyAds();
}