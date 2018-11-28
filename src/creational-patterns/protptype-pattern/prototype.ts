export class Template {
  list: Map<string, UML>;

  constructor () {
    this.list = new Map();
  }

  set (uml: UML) {
    this.list.set(uml.name, uml);
  }

  clone (name: string): UML {
    return this.list.get(name);
  }
}

interface UML {
  name: string;
}

export class ClassDiagram implements UML {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}

export class SequenceDiagram implements UML {
  name: string;

  constructor (name: string) {
    this.name = name;
  }
}
