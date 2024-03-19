import { spinnerController } from "../spinner/spinner-controller.js"
import { createEvent } from "../utils/functions.js";
import { deleteAd, getAdData, getUserData } from "./detail-ad-model.js";
import { renderAd, renderDeleteButton } from "./detail-ad-view.js";

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
    const userData = await getUserData();

    if (adData.userId === userData.userId) {
      deleteButtonHandler(detailContainer, adData.id);

    }


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

  function deleteButtonHandler(detailContainer, id) {
    const buttonContainer = detailContainer.querySelector('.delete-button')
    buttonContainer.innerHTML = renderDeleteButton();
    buttonContainer.addEventListener('click', () => removeAd(id))
  }

  async function removeAd(id) {
    if (window.confirm('Estás seguro de querer borrar el anuncio?')) {
      try {
        await deleteAd(id);
        createEvent(detailContainer, 'detailAd-notifications', {
          detail: {
            message: 'Anuncio eliminado correctamente.',
            type: 'success'
          }
        })
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 2000);

      } catch (error) {
        createEvent(detailContainer, 'detailAd-notifications', {
          detail: {
            message: error,
            type: 'error'
          }
        })
      }

    }
  }
}
