document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS Scroll Animation
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });

  // Form Handling and Validation
  const form = document.getElementById('websiteRequestForm');
  const nameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;

    // Validate Name (Mandatory)
    if (!nameInput.value.trim()) {
      showError(nameInput, nameError);
      isValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Validate Email (Mandatory)
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      showError(emailInput, emailError);
      isValid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // If valid, simulate submission
    if (isValid) {
      const formData = {
        fullName: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: document.getElementById('phone').value.trim() || 'Not Provided',
        additionalInfo: document.getElementById('additionalInfo').value.trim() || 'None'
      };

      console.log('Submitted Request Data:', formData);

      // Hide Form and Show Success Message
      form.classList.add('hidden');
      formSuccess.classList.remove('hidden');
    }
  });

  function showError(inputElement, errorElement) {
    inputElement.classList.add('input-error');
    errorElement.style.display = 'block';
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove('input-error');
    errorElement.style.display = 'none';
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});