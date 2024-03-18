import { spinnerController } from "../spinner/spinner-controller.js"
import { createEvent } from "../utils/functions.js";
import { getAdData } from "./detail-ad-model.js";
import { renderAd } from "./detail-ad-view.js";

export async function detailAdController(detailContainer) {
  const params = new URLSearchParams(window.location.search);
  const adId = params.get('adId');
  if (!adId) {
    window.location.href = 'index.html';
    alert('Hay que especificar el id del anuncio que quieres que se muestre.')
  }

  const spinner = detailContainer.querySelector('#spinner');
  const { showSpinner, hideSpinner } = spinnerController(spinner);

  const adDetailContainer = detailContainer.querySelector('.detail-ad');

  try {
    showSpinner();
    const adData = await getAdData(adId);
    showAd(adDetailContainer, adData);
    
  } catch (error) {
    createEvent(detailContainer, 'detailAd-notifications', {
      detail: {
        message: error,
        type: 'error'
      }
    })
  } finally {
    hideSpinner();
  }
  
  function showAd(adDetailContainer, adData) {
    const adDiv = document.createElement('div');
    adDiv.classList.add('ad-container');
    adDiv.innerHTML = renderAd(adData);
    adDetailContainer.appendChild(adDiv);

  }

}




// -------- conseguir adId
// --------conseguir data del ad
// ---------parsear los datos
// ------------preparar la vista
// ------------introducir la vista en el html
// ---------si error mandar notificaciones
// si el usuario registrado es el propietario del anuncio, mostrar el botón.