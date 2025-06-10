const form = document.getElementById('contactForm') as HTMLFormElement;
const email = form.querySelector('#email');
const error = document.querySelector('.error') as HTMLDivElement;

function checkEmail() {
  if (!form.email.value.includes('@')) {
    error.classList.add('show');
    email?.addEventListener('input', () => {
      if (form.email.value.includes('@')) {
        error.classList.remove('show');
      } else {
        error.classList.add('show');
      }
    });
  } else {
    form.removeEventListener('submit', checkEmail);
  }
}

form?.addEventListener('submit', checkEmail);
