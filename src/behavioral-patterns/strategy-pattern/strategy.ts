class Intake {
  absorption: number
}

export class Drink extends Intake {
  constructor (material: Material) {
    super()
    this.absorption = material.nutrition  * 0.2
  }
}

export class Eat extends Intake {
  constructor (material: Material) {
    super()
    this.absorption = material.nutrition  * 0.8
  }
}

export class Material {
  nutrition: number

  constructor (nutrition: number) {
    this.nutrition = nutrition
  }
}

export class Water extends Material {
  constructor (nutrition: number) {
    super(nutrition)
  }
}

export class Apple extends Material {
  constructor (nutrition: number) {
    super(nutrition)
  }
}

export class Human {
  health: number

  breakfast (intake: Intake): void {
    this.health = intake.absorption * 2
  }

  dinner (intake: Intake): void {
    this.health = intake.absorption
  }
}
