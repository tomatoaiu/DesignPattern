export class Carpenter {
  build (): House {
    return new House('build by carpenter');
  }
}

class House {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}
