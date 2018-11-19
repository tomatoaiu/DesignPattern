class Memento {
  value: string;

  constructor (value: string) {
      this.value = value;
  }
}

export class Originator {
  state: string;

  set (state: string) {
    this.state = state;
  }

  save (): Memento {
    return new Memento(this.state);
  }

  restore (memento: Memento) {
    this.state = memento.value;
  }
}

export class Caretaker {
  mementos: Memento[];

  constructor () {
      this.mementos = [];
  }

  add (memento: Memento) {
      this.mementos.push(memento);
  }

  get (index: number): Memento {
      return this.mementos[index];
  }
}
