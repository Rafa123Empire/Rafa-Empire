function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitButton = form.querySelector("button[type='submit']");
  const originalLabel = submitButton.textContent;

  submitButton.textContent = "Message Sent";
  submitButton.disabled = true;

  alert("Thank you! Your message has been sent.");

  form.reset();

  window.setTimeout(function () {
    submitButton.textContent = originalLabel;
    submitButton.disabled = false;
  }, 1800);
}
