import { spinnerController } from "../spinner/spinner-controller.js";
import { createEvent } from "../utils/functions.js";
import { sendAdDataToServer } from "./create-ad-model.js";

export function createAdController(createAdForm) {
  const spinner = createAdForm.querySelector('#spinner');
  const { showSpinner, hideSpinner } = spinnerController(spinner)

  createAdForm.addEventListener('submit', (e) => {
    e.preventDefault();

    createAd(createAdForm);
    
  })
  
  async function createAd(createAdForm) {
    const { name, price, onSale, description, image } = getFormData(createAdForm);

    try {
      showSpinner();
      await sendAdDataToServer(name, price, onSale, description, image);
      createEvent(createAdForm, 'createAd-notifications', {
        detail: {
          message: 'Anuncio creado correctamente',
          type: 'success'
        }
      })
      setTimeout( ()=> {
        window.location.href = 'index.html'
      }, 2000)

    } catch (error) {
      createEvent(createAdForm, 'createAd-notifications', {
        detail: {
          message: error,
          type: 'error'
        }
      })
    } finally {
      hideSpinner();
    }
    
  }
  
  function getFormData(createAdForm) {
    const formData = new FormData(createAdForm);
    const name = formData.get('name');
    const price = formData.get('price');
    const onSale = formData.get('onSale');
    const description = formData.get('description');
    let image = formData.get('image');
    if (image === '') image = 'images/defaultImage.jpg'
    return { name, price, onSale, description, image }
  }
}