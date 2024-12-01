document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    document.getElementById("thank-you").style.display = "block";
    this.reset(); // Reset form fields
  });
