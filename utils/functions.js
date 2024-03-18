export function emailValidator(form) {
  const email = form.querySelector('#email');
  const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  return emailRegex.test(email.value);
}

