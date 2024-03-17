import { spinnerController } from "../spinner/spinner-controller.js";
import { createEvent } from "../utils/create-event.js";
import { createUser } from "./signup-model.js";

export function signupController(registerForm) {

  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let errors = [];

    if (!emailValidator(registerForm)) errors.push('Introduce un email correcto.');
    
    if (!passwordConfirmation(registerForm)) errors.push('Las contraseñas tienen que ser idénticas.')
    
    showFormErrors(errors, registerForm);

    if (errors.length === 0) {
      registerUser(registerForm);
    }

    function emailValidator(registerForm) {
      const email = registerForm.querySelector('#email');
      const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

      return emailRegex.test(email.value);
    }

    function passwordConfirmation(registerForm) {
      const password = registerForm.querySelector('#password');
      const passwordConfirmation = registerForm.querySelector('#password-confirmation');

      return password.value === passwordConfirmation.value;
    }

    function showFormErrors(errors, registerForm) {
      errors.forEach(error => {
        createEvent(registerForm, 'register-notifications', {
          detail: {
            message: error,
            type: 'error'
          }
        })
      });
    }

    async function registerUser(registerForm) {
      const spinner = registerForm.querySelector('#spinner');
      const { showSpinner, hideSpinner } = spinnerController(spinner);

      const email = registerForm.querySelector('#email');
      const password = registerForm.querySelector('#password');

      try {
        showSpinner();
        await createUser(email.value, password.value);

        createEvent(registerForm, 'register-notifications', {
          detail: {
            message: 'Registro completado exitosamente',
            type: 'success'
          }
        })

        setTimeout(() => {
          window.location.href = 'index.html';
        }, 3000);
        
      } catch (error) {
        createEvent(registerForm, 'register-notifications', {
          detail: {
            message: error,
            type: 'error'
          }
        })
      } finally {
        hideSpinner();
      }
    }
  })
}