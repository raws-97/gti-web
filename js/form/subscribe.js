function subscribeUs() {
    const formElement = document.getElementById('subscribe-us-form');
    const submitButton = document.getElementById('submit-button-subscribe');
    const loadingElement = document.getElementById('loading-subscribe');
  
    formElement.addEventListener('submit', async function (event) {
      event.preventDefault();
      console.log("Submitting Subscribe Form")
      submitButton.style.display = 'none';
      loadingElement.style.display = 'block';
  
      try {
        const formData = new FormData(formElement);
        const serializedForm = Object.fromEntries(formData);
  
        const response = await fetch(API_URL + "?target=subscribe", {
          method: 'POST',
          body: JSON.stringify(serializedForm),
          headers: {
            'Content-type': 'text/plain;charset=utf-8'
          }
        });
  
        if (response.ok) {
          await response.json();
          notification('success', "Sukses!", "Terimakasih sudah subscribe.");
          formElement.reset();
          submitButton.style.display = 'block';
          loadingElement.style.display = 'none';
        } else {
          notification('error', "Oops!", "Terjadi kesalahan, silahkan coba lagi.");
          submitButton.style.display = 'block';
          loadingElement.style.display = 'none';
        }
      } catch (error) {
        console.warn(error);
        notification('error', "Oops!", "Terjadi kesalahan, silahkan coba lagi.");
        submitButton.style.display = 'block';
      }
    });
  }
  