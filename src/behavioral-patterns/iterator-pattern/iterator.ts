export interface Iterator {
  next () : any
  hasNext (): Boolean
}

interface Aggregate {
  iterator(): Iterator
}

export class Item {
  private name: String

  constructor (name: String) {
    this.name = name
  }

  public getName (): String {
    return this.name
  }
}

export class ItemBag implements Aggregate {
  private items: Array<Item>

  constructor () {
    this.items = []
  }

  public add (item: Item): void {
    this.items.push(item)
  }

  public iterator (): Iterator {
      return new ItemBagIterator(this.items)
  }
}

class ItemBagIterator implements Iterator {
  private items: Array<Item>
  private index: number

  constructor (items: Array<Item>) {
      this.items= items
      this.index = 0
  }

  public next (): Item {
      return this.items[this.index++] as Item
  }

  public hasNext (): Boolean {
      return this.index < this.items.length
  }
}
