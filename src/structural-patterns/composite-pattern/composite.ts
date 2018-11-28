export interface Component {
  name: string;
  children: Map<string, Component>;

  add (child: Component): void;
}

export class ParentComponnet implements Component {
  name: string;
  children: Map<string, Component>;

  constructor (name: string) {
    this.name = name;
    this.children = new Map();
  }

  add (child: Component): void {
    this.children.set(child.name, child);
  }
}

export class ChildComponent implements Component {
  name: string;
  children: Map<string, Component>;

  constructor (name: string) {
    this.name = name;
  }

  add (): void {}
}
