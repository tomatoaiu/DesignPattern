import { Light, Smartphone, Flashlight, Laptop } from '../../../src/behavioral-patterns/template-method-pattern/template-method'

describe('Template Method Pattern', () => {
  const smartphone: Light = new Smartphone()
  const flashlight: Light = new Flashlight()
  const laptop: Light = new Laptop()

  it('Smartphoneok illuminate is This light glowed!', () => {
    expect(smartphone.illuminate()).toBe('This light glowed!')
  })

  it('Flashlight illuminate is This light glowed!', () => {
    expect(flashlight.illuminate()).toBe('This light glowed!')
  })

  it('Laptop illuminate is This light glowed!', () => {
    expect(laptop.illuminate()).toBe('This light glowed!')
  })
})
