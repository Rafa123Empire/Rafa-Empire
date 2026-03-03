function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector("button[type='submit']");
  const status = document.getElementById("form-status");
  const originalLabel = submitButton.textContent;
  const formData = new FormData(form);

  submitButton.textContent = "Sending...";
  submitButton.disabled = true;
  status.textContent = "";
  status.classList.remove("error", "success");

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Request failed");
      }

      status.textContent = "Thank you. Your message was sent successfully.";
      status.classList.add("success");
      form.reset();
    })
    .catch(function () {
      status.textContent = "Message failed to send. Please call or email us directly.";
      status.classList.add("error");
    })
    .finally(function () {
      submitButton.textContent = originalLabel;
      submitButton.disabled = false;
    });
}
