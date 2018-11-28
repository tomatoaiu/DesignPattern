export class Pot {
  contents: Array<Food>;

  constructor () {
    this.contents = [];
  }

  add (food: Food) {
    this.contents.push(food);
  }
}

interface Food {

}

class Vegetable implements Food {

}

class Meat implements Food {

}

class Sauce implements Food {

}

export interface StewFactory {
  getVegetable (): Food;
  getMeat (): Food;
  getSauce (): Food;
}

export class BeefStew implements StewFactory {
  getVegetable (): Food {
    return new Vegetable();
  }

  getMeat (): Food {
    return new Meat();
  }

  getSauce (): Food {
    return new Sauce();
  }
}

export class CreamStew implements StewFactory {
  getVegetable (): Food {
    return new Vegetable();
  }

  getMeat (): Food {
    return new Meat();
  }

  getSauce (): Food {
    return new Sauce();
  }
}

export function createStewFactory (name: string): StewFactory {
  if (name === 'beef') {
    return new BeefStew();
  } else if (name === 'cream') {
    return new CreamStew();
  } else {
    return new CreamStew();
  }
}
