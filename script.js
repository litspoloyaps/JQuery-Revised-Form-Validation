$(document).ready(function () {

  function setError(input, message) {
    input.addClass("error").removeClass("success");
    input.next("small").text(message);
  }

  function setSuccess(input) {
    input.addClass("success").removeClass("error");
    input.next("small").text("");
  }

  function validateName() {
    const input = $("#name");
    const name = input.val().trim();
    if (name === "") {
      setError(input, "Name is required");
      return false;
    }
    setSuccess(input);
    return true;
  }

  function validateEmail() {
    const input = $("#email");
    const email = input.val().trim();
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!pattern.test(email)) {
      setError(input, "Enter a valid email");
      return false;
    }
    setSuccess(input);
    return true;
  }

  function validatePhone() {
    const input = $("#phone");
    const phone = input.val().trim();
    const pattern = /^[0-9]{11}$/;
    if (!pattern.test(phone)) {
      setError(input, "Enter an 11-digit phone number");
      return false;
    }
    setSuccess(input);
    return true;
  }

  function validatePassword() {
    const input = $("#password");
    const pass = input.val();
    if (pass.length < 6) {
      setError(input, "Password must be at least 6 characters");
      return false;
    }
    setSuccess(input);
    return true;
  }

  function validateConfirmPassword() {
    const input = $("#confirmPassword");
    const pass = $("#password").val();
    const confirm = input.val();
    if (pass !== confirm || confirm === "") {
      setError(input, "Passwords do not match");
      return false;
    }
    setSuccess(input);
    return true;
  }

  $("#name").on("keyup blur", validateName);
  $("#email").on("keyup blur", validateEmail);
  $("#phone").on("keyup blur", validatePhone);
  $("#password").on("keyup blur", validatePassword);
  $("#confirmPassword").on("keyup blur", validateConfirmPassword);

  $("#regForm").submit(function (e) {
    e.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      alert("Registration Successful!");
      this.reset();
      $("input").removeClass("success error");
      $("small").text("");
    }
  });

});
