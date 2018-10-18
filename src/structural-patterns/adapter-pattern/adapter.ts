interface KeyboardPrice {
  getPrice (): number
}

class Keyboard {
  private cost: number

  constructor () {
    this.cost = 100
  }

  public getCost(): number {
      return this.cost
  }
}

class KeyboardAdapter extends Keyboard implements KeyboardPrice {

  constructor () {
    super()
  }

  public getPrice(): number {
      return this.getCost()
  }
}

export default KeyboardAdapter
