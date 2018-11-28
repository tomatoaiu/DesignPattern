import { Minus, Plus } from '../../../src/behavioral-patterns/interpreter-pattern/interpreter'

describe('Mediator Pattern', () => {

  const plus = new Plus()
  const minus = new Minus()
  const result: number = plus.execute(1, plus.execute(2, minus.execute(3, plus.execute(4, 5))))

  it('result is -3', () => {
    expect(result).toBe(-3)
  })
})
