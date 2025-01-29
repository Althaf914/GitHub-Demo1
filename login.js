document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      } else {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
      }
    });
  
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirme password"]');
    
    if (password.value !== confirmPassword.value) {
      isValid = false;
      confirmPassword.classList.add('is-invalid');
      confirmPassword.classList.remove('is-valid');
      confirmPassword.nextElementSibling.textContent = "Passwords do not match.";
    } else {
      confirmPassword.classList.add('is-valid');
      confirmPassword.classList.remove('is-invalid');
      confirmPassword.nextElementSibling.textContent = "Passwords matched";
    }
  
    if (isValid) {
      form.submit();
    }
  });
  