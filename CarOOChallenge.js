class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "Beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}
class Garage {
  constructor(max) {
    this.capacity = max;
    this.vehicles = [];
  }
  add(car) {
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full";
    } else if (!(car instanceof Vehicle)) {
      return "Only vehicle are allowed in here!";
    }
    this.vehicles.push(car);
    return "Vehicle added!";
  }
}
