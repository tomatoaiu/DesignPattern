class Vehicle {
  name: string;

  constructor (name: string) {
    this.name = name
  }
}

export class Garage {
  cars: Map<string, Vehicle>;

  constructor () {
    this.cars = new Map<string, Vehicle>();
  }

  use (car: string): Vehicle {
    if (!this.cars.has(car)) {
      this.cars.set(car, new Vehicle(car));
    }
    return this.cars.get(car);
  }
}

