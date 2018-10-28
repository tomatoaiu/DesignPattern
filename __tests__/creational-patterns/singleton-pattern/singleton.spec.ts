import { OnlyOne } from '../../../src/creational-patterns/singleton-pattern/singleton'

describe('Singleton Pattern', () => {
  const onlyOne = OnlyOne.getInstance()
  const unique = OnlyOne.getInstance()

  it('onlyOne is unique', () => {
    expect(onlyOne).toEqual(unique)
  })
})
