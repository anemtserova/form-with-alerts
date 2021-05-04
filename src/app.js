import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const errorMessage = message => {
  const alertDanger = document.querySelector(".alert-danger");
  alertDanger.classList.contains("d-none") &&
    alertDanger.classList.toggle("d-block");
  alertDanger.innerHTML += `<p>${message}</p>`;
};

const form = document.querySelector("#myForm");
const submitForm = e => {
  e.preventDefault();

  let userInput = document.querySelectorAll(".form-control");
  userInput.forEach(input => input.classList.remove("is-invalid"));

  const inputCard = document.querySelector("#inputCardNum");
  const inputExpDate = document.querySelector("#inputExpDate");
  const inputCVV = document.querySelector("#inputCVV");
  const inputName = document.querySelector("#inputName");
  const inputAddress = document.querySelector("#inputAddress");
  const inputCity = document.querySelector("#inputCity");
  const inputZip = document.querySelector("#inputZip");
  const state = document.querySelector("select");
  const alertDanger = document.querySelector(".alert-danger");

  !alertDanger.classList.contains("d-none") &&
    alertDanger.classList.toggle("d-none");
  alertDanger.innerHTML = "";

  if (inputCard.value.length != 16) {
    errorMessage("Card number needs to be 16 digits.");
    inputCard.classList.add("is-invalid");
  }

  if (inputCVV.value.length < 3) {
    errorMessage("CVV number needs to be 3 digits.");
    inputCVV.classList.add("is-invalid");
  }

  if (inputExpDate.value.length == 0) {
    errorMessage("Date needed.");
    inputExpDate.classList.add("is-invalid");
  }

  if (inputName.value.length < 5) {
    errorMessage("Name must be at least 5 characters long.");
    inputName.classList.add("is-invalid");
  }

  if (inputAddress.value.length < 10) {
    errorMessage("Address must be more than 10 characters long.");
    inputAddress.classList.add("is-invalid");
  }

  if (inputZip.value.length < 5) {
    errorMessage("Zip must be at least 4 characters long.");
    inputZip.classList.add("is-invalid");
  }

  if (inputCity.value.length < 2) {
    errorMessage("City must be at least 3 characters long.");
    inputCity.classList.add("is-invalid");
  }

  if (state.value == "") {
    errorMessage("State should be selected.");
    state.classList.add("is-invalid");
  }
};

form.addEventListener("submit", submitForm);
