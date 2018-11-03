export class Light {
  illuminate(): string {
    return 'This light glowed!'
  }
}

export class Smartphone extends Light {
}

export class Flashlight extends Light {
}

export class Laptop extends Light {
}
