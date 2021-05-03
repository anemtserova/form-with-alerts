/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const usStatesList = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
const form = document.querySelector("form");
const selectUSState = document.querySelector("#inputState");
const alertDanger = document.querySelector(".alert-danger");
//const alertSuccess = document.querySelector(".alert-success");
let userInput = document.querySelectorAll(".form-control");
const btnSubmit = document.querySelector(".btn");

window.onload = function() {
  usStatesList.map(
    state => (selectUSState.innerHTML += `<option>${state}</option>`)
  );

  const showAlert = () => alertDanger.classList.remove("d-none");
  const showSuccessAlert = () => {
    //alertSuccess.classList.remove("d-none");
    alertDanger.classList.remove("d-none");
    alertDanger.classList.remove("alert-danger");
    alertDanger.classList.add("alert-success");
    alertDanger.innerHTML = "<div>Payment Submitted Successfully</div>";
  };

  const checkInputFields = () => {
    let inputFilled = true;
    userInput.forEach(input => {
      if (input.value == "" || input.value == null) {
        showAlert();
        input.style.border = "2px solid red";
        return (inputFilled = false);
      }
    });
    return inputFilled;
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInputFields();
    if (checkInputFields()) showSuccessAlert();
  });
};
