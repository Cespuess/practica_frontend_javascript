import { createRegistredOptions, createUnregistredOptions } from "./session-view.js";

export function sessionController(sessionbar) {
  localStorage.setItem('token', 'hola');
  const token = localStorage.getItem('token');

  if (token) {
    sessionbar.innerHTML = createRegistredOptions();
    const logoutButton = sessionbar.querySelector('#logout');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('token');
      sessionController(sessionbar);
    })

  } else {
    sessionbar.innerHTML = createUnregistredOptions();
  }
}