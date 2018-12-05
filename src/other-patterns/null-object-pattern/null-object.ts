export interface HASNAME {
  name: string;
}

export class NullObject implements HASNAME {
  name: string;

  constructor () {
    this.name = 'null name';
  }
}

export class Human implements HASNAME {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}
