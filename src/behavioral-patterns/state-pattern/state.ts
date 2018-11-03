interface State {
  damage (): number
}

export class Poison implements State {
  damage (): number {
    return 10
  }
}

export class Paralysis implements State {
  damage (): number {
    return 20
  }
}

export class Burn implements State {
  damage (): number {
    return 30
  }
}

export class Human {
  state: State
  health: number

  constructor (health: number) {
    this.health = health
  }

  damage (): void {
    this.health -= this.state.damage()
  }
}
