import { OnlyOne } from '../../../src/creational-patterns/singleton-pattern/singleton'

describe('Singleton Pattern', () => {
  const onlyOne = new OnlyOne()
  const unique = new OnlyOne()

  it('onlyOne is onlyTwo', () => {
    expect(onlyOne).toEqual(unique)
  })
})
