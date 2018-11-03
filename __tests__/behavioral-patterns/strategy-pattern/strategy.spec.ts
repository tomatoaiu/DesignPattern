import { Drink, Eat, Water, Apple, Material, Human } from '../../../src/behavioral-patterns/strategy-pattern/strategy'

describe('Strategy Pattern', () => {
  const human: Human = new Human()

  const water: Material = new Water(10)
  const apple: Material = new Apple(100)

  it('breakfast water is human health 4', () => {
    human.breakfast(new Drink(water))
    expect(human.health).toBe(4)
  })

  it('dinner apple is human health 80', () => {
    human.dinner(new Eat(apple))
    expect(human.health).toBe(80)
  })
})
