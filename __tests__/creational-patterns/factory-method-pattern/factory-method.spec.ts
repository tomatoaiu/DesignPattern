import { Factory, AccountFactory, Product} from '../../../src/creational-patterns/factory-method-pattern/factory-method'

describe('Factory Method Pattern', () => {
  const factory: Factory  = new AccountFactory()

  it('factory account1.use() is Use account: Ralph Johnson', () => {
    const owner: String = 'Ralph Johnson'
    const account1: Product = factory.create(owner)

    expect(account1.use()).toBe(`Use account: ${owner}`)
  })

  it('factory account2.use() is Use account: Richard Helm', () => {
    const owner: String = 'Richard Helm'
    const account2: Product = factory.create(owner)

    expect(account2.use()).toBe(`Use account: ${owner}`)
  })

  it('factory account3.use() is Use account: John Vlissides', () => {
    const owner: String = 'John Vlissides'
    const account3: Product = factory.create(owner)

    expect(account3.use()).toBe(`Use account: ${owner}`)
  })

  it('factory account4.use() is Use account: Erich Gamman', () => {
    const owner: String = 'Erich Gamma'
    const account4: Product = factory.create(owner)

    expect(account4.use()).toBe(`Use account: ${owner}`)
  })
})
