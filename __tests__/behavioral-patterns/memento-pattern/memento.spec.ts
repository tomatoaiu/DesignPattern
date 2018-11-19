import { Originator, Caretaker } from '../../../src/behavioral-patterns/memento-pattern/memento'

describe('Memento Pattern', () => {
  const caretaker: Caretaker = new Caretaker()
  const originator: Originator = new Originator()

  originator.set('10')
  originator.set('20')
  caretaker.add(originator.save())
  originator.set('30')
  caretaker.add(originator.save())
  originator.set('40')

  it('originator.restore(caretaker.get(0)) is 20', () => {
    originator.restore(caretaker.get(0))
    expect(originator.state).toBe('20')
  })

  it('originator.restore(caretaker.get(1) is 30', () => {
    originator.restore(caretaker.get(1))
    expect(originator.state).toBe('30')
  })
})
