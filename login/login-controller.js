import { spinnerController } from "../spinner/spinner-controller.js";
import { createEvent } from "../utils/create-event.js";
import { emailValidator } from "../utils/functions.js";
import { login } from "./login-model.js";

export function loginController(loginForm) {
  const spinner = loginForm.querySelector('#spinner');
  const { showSpinner, hideSpinner } = spinnerController(spinner);
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!emailValidator(loginForm)) {
      createEvent(loginForm, 'login-notifications', {
        detail: {
          message: 'Introduce un email correcto.',
          type: 'error'
        }
      })
    }

    verifyLogin(loginForm);
  })
  
  async function verifyLogin(loginForm) {
    const { email, password } = getLoginData(loginForm);
    try {
      showSpinner();
      const token = await login(email, password);
      localStorage.setItem('token', token);
      createEvent(loginForm, 'login-notifications', {
        detail: {
          message: 'Usuario identificado correctamente.',
          type: 'success'
        }
      })

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    } catch (error) {
      createEvent(loginForm, 'login-notifications', {
        detail: {
          message: error,
          type: 'error'
        }
      })
    } finally {
      hideSpinner();
    }

  }
  
  function getLoginData(loginForm) {
    const formData = new FormData(loginForm)
    const email = formData.get('email');
    const password = formData.get('password');

    return {email, password}
  }
  

}