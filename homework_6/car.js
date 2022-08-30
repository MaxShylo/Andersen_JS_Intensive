'use strict'

function isValidName(name) {
  const valid = (typeof name === 'string') && (name.length >= 1) && (name.length <= 50);

  return valid;
}

class Car {
  #brand = null;
  #model = null;
  #yearOfManufacturing = null;
  #maxSpeed = null;
  #maxFuelVolume = null;
  #fuelConsumption = null;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(brandName) {
    if (!isValidName(brandName)) {
      throw new Error('Invalid input, should be string from 1 to 50 characters inclusive!!!');
    }

    this.#brand = brandName;
  }

  set model(modelName) {
    if (!isValidName(modelName)) {
      throw new Error('Invalid input, should be string from 1 to 50 characters inclusive!!!');
    }

    this.#model = modelName;
  }

  set yearOfManufacturing(year) {
    const isValidYear = (Number.isFinite(year)) && (year >= 1900) && (year <= new Date().getFullYear());

    if (!isValidYear) {
      throw new Error('Invalid input, should be number from 1900 to the current year inclusive!!!');
    }

    this.#yearOfManufacturing = year;
  }

  set maxSpeed(speed) {
    const isValidSpeed = (Number.isFinite(speed)) && (speed >= 100) && (speed <= 300);

    if (!isValidSpeed) {
      throw new Error('Invalid input, should be number from 100 to 300 km/h!!!');
    }

    this.#maxSpeed = speed;
  }

  set maxFuelVolume(liters) {
    const isValidLiters = (Number.isFinite(liters)) && (liters >= 5) && (liters <= 20);

    if (!isValidLiters) {
      throw new Error('Invalid input, should be number in liters from 5 to 20!!!');
    }

    this.#maxFuelVolume = liters;
  }

  set fuelConsumption(consumption) {
    const isValidConsumption = (Number.isFinite(consumption)) && (consumption > 0);

    if (!isValidConsumption) {
      throw new Error('Invalid input, should be correct number in liters/100 km!!!')
    }

    this.#fuelConsumption = consumption;
  }

  get brand() {
    return this.#brand;
  }

  get model() {
    return this.#model;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('The car is already started!!!');
    }

    return (this.#isStarted = true);
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('The car is not started yet!!!');
    }

    return (this.#isStarted = false);
  }

  fillUpGasTank(liters) {
    if (!Number.isFinite(liters) || liters <= 0) {
      throw new Error('Incorrect amount of fuel to refuel!!!');
    }

    const filledAmount = this.#currentFuelVolume + liters;

    if (filledAmount > this.#maxFuelVolume) {
      throw new Error('Fuel tank is full!!!');
    }

    return (this.#currentFuelVolume += liters);
  }

  drive(speed, hours) {
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error('Incorrect speed!!!');
    }

    if (!Number.isFinite(hours) || hours <= 0) {
      throw new Error('Incorrect number of hours!!!');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('The car can\'t go that fast!!!');
    }

    if (!this.#isStarted) {
      throw new Error('The car must be started to drive!!!');
    }

    const maxDistance = this.#currentFuelVolume / this.#fuelConsumption * 100;
    const distance = speed * hours;

    if (distance > maxDistance) {
      throw new Error('Not enough fuel!!!');
    }

    this.#mileage += distance;
    this.#currentFuelVolume -= this.#fuelConsumption * distance / 100;
  }
}
