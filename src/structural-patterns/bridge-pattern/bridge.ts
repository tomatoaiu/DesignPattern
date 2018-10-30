export class LaunchPad {
  private weapon: Weapon

  constructor (weapon: Weapon) {
    this.weapon = weapon
  }

  public missile (): Number {
    return this.weapon.missile()
  }
}

export class TrackingLaunchPad extends LaunchPad{
  constructor (weapon: Weapon) {
    super(weapon)
  }

  public laser (): Number{
    return 20
  }
}

abstract class Weapon {
  public abstract missile (): Number
}

export class Fighter extends Weapon {
  public missile(): Number{
    return 100
  }
}
