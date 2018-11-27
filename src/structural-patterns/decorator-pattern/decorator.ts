export class Rice {
  topping: string;

  constructor () {
    this.topping = 'rice';
  }
}

export class SalmonRice extends Rice {
  constructor (rice: Rice) {
    super();
    this.topping = `salmon ${rice.topping}`;
  }
}

export class Ochazuke extends Rice {
  rice: Rice;

  constructor (rice: Rice) {
    super();
    this.topping = `tea ${rice.topping}`;
  }
}
