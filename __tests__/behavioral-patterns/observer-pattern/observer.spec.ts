import { Observer, Subject } from '../../../src/behavioral-patterns/observer-pattern/observer'

describe('Observer Pattern', () => {
  const one: Observer = new Observer()
  const two: Observer = new Observer()
  const three: Observer = new Observer()

  const subject: Subject = new Subject()
  subject.register(one)
  subject.register(two)
  subject.register(three)

  subject.notify()

  it('one is notify', () => {
    expect(one.message).toBe('notify')
  })

  it('two is notify', () => {
    expect(two.message).toBe('notify')
  })

  it('three is notify', () => {
    expect(three.message).toBe('notify')
  })
})
