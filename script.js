document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  //   add a submit listener to the form
  form.addEventListener("submit", (event) => {
    // prevent form from submitting to server
    event.preventDefault();

    // retrieve and trim user inputs
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("invalid input, use a longer username");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push(`put a valid email`);
    }

    if (password.length < 8) {
      isValid = false;
      messages.push(`password should be more 8 character`);
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");

      feedbackDiv.style.color = "#dc3545";
    }
  });
});
