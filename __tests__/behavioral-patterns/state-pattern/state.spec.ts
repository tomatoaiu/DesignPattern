import { Poison, Paralysis, Burn, Human } from '../../../src/behavioral-patterns/state-pattern/state'

describe('Command Pattern', () => {
  const ichiro: Human = new Human(100)
  const jiro: Human = new Human(200)
  const saburo: Human = new Human(300)

  it('ichiro health is 90', () => {
    ichiro.state = new Poison()
    ichiro.damage()
    expect(ichiro.health).toBe(90)
  })

  it('jiro health is 90', () => {
    jiro.state = new Paralysis()
    jiro.damage()
    expect(jiro.health).toBe(180)
  })

  it('saburo health is 90', () => {
    saburo.state = new Burn()
    saburo.damage()
    expect(saburo.health).toBe(270)
  })
})
