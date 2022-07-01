const btn = document.querySelector("button");
var inputFields = document.querySelectorAll("input");
var inputError = document.querySelectorAll(".error-text");
var firstName = document.querySelector("#first-name");
var lastName = document.querySelector("#last-name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");

btn.addEventListener("click", (e) => {
  if (
    firstName.value === "" &&
    lastName.value === "" &&
    email.value === "" &&
    password.value === ""
  ) {
    inputError.forEach((errorText) => {
      errorText.style.display = "initial";
    });
    inputFields.forEach((field) => {
      field.style.border = "2px solid rgb(207, 141, 142)";
      field.style.background =
        "url(./images/icon-error.svg) no-repeat 95%";
    });
    firstName.placeholder = "";
    lastName.placeholder = "";
    password.placeholder = "";
    email.value = "email@example/com";
    email.style.color = "rgb(255, 121, 120)";
    email.style.fontWeight = "bold";
  }
});
