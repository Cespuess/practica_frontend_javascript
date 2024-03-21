import { spinnerController } from "../spinner/spinner-controller.js";
import { getAds } from "./ads-list-model.js";
import { designAds, emptyAds } from "./ads-list-views.js";
import { createEvent } from "../utils/functions.js";


export async function adsListController (adsList) {
  const spinner = adsList.querySelector('#spinner');
  const { showSpinner, hideSpinner } = spinnerController(spinner)

  try {
    showSpinner();
    const ads = await getAds()
    if (ads.length > 0) {
      showAds(ads, adsList);
    } else {
      showEmptyAds(adsList);
    }
  } catch (error) {
    createEvent(adsList, 'getAdsErrors', {
      detail: {
        message: error.message, 
        type: 'error'}
      });
  } finally {
    hideSpinner();
  }

}

function showAds(ads, adsList) {
  ads.forEach(ad => {
    const adContainer = document.createElement('div');
    adContainer.classList.add('ad-container');
    adContainer.innerHTML = designAds(ad); 
    adsList.appendChild(adContainer);
  });
}

function showEmptyAds(adsList){
  const emptyAdContainer = document.createElement('div');
  emptyAdContainer.classList.add('empty-ads-container');
  emptyAdContainer.innerHTML = emptyAds(); 
  adsList.appendChild(emptyAdContainer);
}