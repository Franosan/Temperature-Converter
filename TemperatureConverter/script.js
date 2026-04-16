"use strict";

// K = C + 273.15
// K = (F - 32) / 1.8 + 273.15
// F = C * 1.8 + 32
// F = (K - 273.15) * 1.8 + 32
// C = K - 273.15
// C = (F - 32) / 1.8

const celsiusEl = document.querySelector(".input-c");
const fahrenheitEl = document.querySelector(".input-f");
const kelvinEl = document.querySelector(".input-k");
const submitEl = document.querySelector(".btn-submit");
const form = document.querySelector(".form");

const object = {
  celsius: "",
  fahrenheit: "",
  kelvin: "",

  calculate() {
    if (typeof this.celsius === "string") {
      this.fahrenheit = Number(this.celsius) * 1.8 + 32;
      this.kelvin = Number(this.celsius) + 273.15;
      this.celsius = Number(this.celsius);
    } else if (typeof this.fahrenheit === "string") {
      this.celsius = (Number(this.fahrenheit) - 32) / 1.8;
      this.kelvin = (Number(this.fahrenheit) - 32) / 1.8 + 273.15;
      this.fahrenheit = Number(this.fahrenheit);
    } else if (typeof this.kelvin === "string") {
      this.celsius = Number(this.kelvin) - 273.15;
      this.fahrenheit = (Number(this.kelvin) - 273.15) * 1.8 + 32;
      this.kelvin = Number(this.kelvin);
    }
  },

  getCelsius() {
    return this.celsius;
  },
  getFahrenheit() {
    return this.fahrenheit;
  },
  getKelvin() {
    return this.kelvin;
  },

  setCelsius(value) {
    this.celsius = value;
  },
  setFahrenheit(value) {
    this.fahrenheit = value;
  },
  setKelvin(value) {
    this.kelvin = value;
  },
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  object.calculate();
  celsiusEl.value = object.getCelsius();
  fahrenheitEl.value = object.getFahrenheit();
  kelvinEl.value = object.getKelvin();
});

celsiusEl.addEventListener("input", (e) => {
  object.setCelsius(e.target.value);
});

fahrenheitEl.addEventListener("input", (e) => {
  object.setFahrenheit(e.target.value);
});
kelvinEl.addEventListener("input", (e) => {
  object.setKelvin(e.target.value);
});
