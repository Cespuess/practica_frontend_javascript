export function emailValidator(form) {
  const email = form.querySelector('#email');
  const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  return emailRegex.test(email.value);
}

export function createEvent(element, name, options) {
  const event = new CustomEvent(name, options);
  element.dispatchEvent(event);
}

export function priceFormat(price) {
  return parseFloat(price).toLocaleString('es-ES', {
    style: 'currency', currency: 'EUR'
  }) 
}