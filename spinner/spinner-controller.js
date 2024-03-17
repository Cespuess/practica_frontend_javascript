import { createSpinner } from './spinner-view.js';

export const spinnerController = (spinnerContainer) => {
  
  const showSpinner = () => {
    spinnerContainer.classList.add('active');
    spinnerContainer.innerHTML = createSpinner();
  }
  
  const hideSpinner = () => {
    spinnerContainer.classList.remove('active');
    spinnerContainer.innerHTML = '';
  }

  return {
    showSpinner,
    hideSpinner,
  }

}