import KeyboardAdapter from '../../../src/structural-patterns/adapter-pattern/adapter'

describe('Adapter Pattern', () => {
  const product = new KeyboardAdapter()

  it('KeyboardAdapter getPrice is 100', () => {
    expect(product.getPrice()).toBe(100)
  })
})
