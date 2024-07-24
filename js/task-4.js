const regFormSubmit = document.querySelector('.login-form');

regFormSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const regFormSubmit = event.target;
  const email = regFormSubmit.elements.email.value;
  const password = regFormSubmit.elements.password.value;

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  regFormSubmit.reset();
});
