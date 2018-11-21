interface Vehicle {
  move (): string
}

class Boat implements Vehicle {
  move (): string {
    return 'by boat'
  }
}

class Airplane implements Vehicle {
  move (): string {
    return 'by airplane'
  }
}

class Car implements Vehicle {
  move (): string {
    return 'by car'
  }
}

export class Human {
  moveOn (road: string): string {
    let vehicle: Vehicle;
    if (road === 'ground') {
      vehicle = new Car();
    } else if (road === 'sea') {
      vehicle = new Boat();
    } else if (road === 'sky') {
      vehicle = new Airplane();
    }
    return vehicle.move();
  }
}
