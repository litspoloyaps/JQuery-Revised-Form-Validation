$(document).ready(function () {

  function validateName() {
    let name = $("#name").val().trim();

    if (name === "") {
      $("#name").addClass("error").removeClass("success");
      $("#name").next("small").text("Name is required");
      return false;
    } else {
      $("#name").addClass("success").removeClass("error");
      $("#name").next("small").text("");
      return true;
    }
  }

  function validateEmail() {
    let email = $("#email").val().trim();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(email)) {
      $("#email").addClass("error").removeClass("success");
      $("#email").next("small").text("Enter a valid email");
      return false;
    } else {
      $("#email").addClass("success").removeClass("error");
      $("#email").next("small").text("");
      return true;
    }
  }

  function validatePhone() {
    let phone = $("#phone").val().trim();
    let pattern = /^[0-9]{11}$/;

    if (!pattern.test(phone)) {
      $("#phone").addClass("error").removeClass("success");
      $("#phone").next("small").text("Enter an 11-digit phone number");
      return false;
    } else {
      $("#phone").addClass("success").removeClass("error");
      $("#phone").next("small").text("");
      return true;
    }
  }

  function validatePassword() {
    let pass = $("#password").val();

    if (pass.length < 6) {
      $("#password").addClass("error").removeClass("success");
      $("#password").next("small").text("Password must be at least 6 characters");
      return false;
    } else {
      $("#password").addClass("success").removeClass("error");
      $("#password").next("small").text("");
      return true;
    }
  }

  function validateConfirmPassword() {
    let pass = $("#password").val();
    let confirm = $("#confirmPassword").val();

    if (pass !== confirm || confirm === "") {
      $("#confirmPassword").addClass("error").removeClass("success");
      $("#confirmPassword").next("small").text("Passwords do not match");
      return false;
    } else {
      $("#confirmPassword").addClass("success").removeClass("error");
      $("#confirmPassword").next("small").text("");
      return true;
    }
  }

  $("#name").keyup(validateName).blur(validateName);
  $("#email").keyup(validateEmail).blur(validateEmail);
  $("#phone").keyup(validatePhone).blur(validatePhone);
  $("#password").keyup(validatePassword).blur(validatePassword);
  $("#confirmPassword").keyup(validateConfirmPassword).blur(validateConfirmPassword);

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
      $("#regForm")[0].reset();
      $("input").removeClass("success error");
      $("small").text("");
    }
  });

});
