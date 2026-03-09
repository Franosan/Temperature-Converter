"use strict";

const inputC = document.querySelector(".input-c");
const inputF = document.querySelector(".input-f");
const inputK = document.querySelector(".input-k");
const btnSubmit = document.querySelector(".btn-submit");

let celsius, fahrenheit, kelvin;

btnSubmit.addEventListener("click", calculate);

inputC.addEventListener("input", function (e) {
  celsius = e.target.value;
});

inputF.addEventListener("input", function (e) {
  fahrenheit = e.target.value;
});

inputK.addEventListener("input", function (e) {
  kelvin = e.target.value;
});

function setValues() {
  inputC.value = celsius;
  celsius = Number(celsius);

  inputF.value = fahrenheit;
  fahrenheit = Number(fahrenheit);

  inputK.value = kelvin;
  kelvin = Number(kelvin);
}

function calculate() {
  if (typeof celsius === "string") {
    fahrenheit = Number(celsius) * 1.8 + 32;
    kelvin = Number(celsius) + 273.15;
    setValues();
  } else if (typeof fahrenheit === "string") {
    celsius = ((Number(fahrenheit) - 32) * 5) / 9;
    kelvin = Number(celsius) + 273.15;
    setValues();
  } else if (typeof kelvin === "string") {
    celsius = Number(kelvin) - 273.15;
    fahrenheit = (Number(kelvin) - 273.15) * 1.8 + 32;
    setValues();
  }
}
