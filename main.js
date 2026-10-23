// If valid, send the data to your Vercel backend
    if (isValid) {
      const formData = {
        fullName: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: document.getElementById('phone').value.trim() || 'Not Provided',
        additionalInfo: document.getElementById('additionalInfo').value.trim() || 'None'
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
          // Hide Form and Show Success Message
          form.classList.add('hidden');
          formSuccess.classList.remove('hidden');
        } else {
          alert('Error sending request: ' + (result.error || 'Please try again.'));
        }
      } catch (err) {
        console.error('Submission error:', err);
        alert('Network error. Please try again later.');
      }
    }
