import { Iterator, Item, ItemBag } from '../../../src/behavioral-patterns/iterator-pattern/iterator'

describe('Iterator Pattern', () => {
  const itemName: string[] = ['pc', 'tv', 'radio']
  const bag: ItemBag = new ItemBag()

  for (let i = 0; i < itemName.length; i++) {
    bag.add(new Item(itemName[i]))
  }

  const iterator: Iterator = bag.iterator()

  let i: number = 0
  while (iterator.hasNext()) {
    const item: Item = iterator.next()
    it(`item name is ${itemName[i]}`, () => {
      expect(item.getName()).toEqual(itemName[i++])
    })
  }
})
