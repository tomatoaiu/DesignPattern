import { Shop, LuxuryShop, CheapShop, Visitor } from '../../../src/behavioral-patterns/visitor-pattern/visitor'

describe('Visitor Pattern', () => {

  const luxuryShop: Shop = new LuxuryShop(100)
  const cheapShop: Shop = new CheapShop(10)

  const visitor: Visitor = new Visitor([luxuryShop, cheapShop])

  it('luxuryShop.salesValue is 200', () => {
    visitor.richShopping()
    expect(luxuryShop.salesValue).toBe(200)
  })

  it('CheapShop.salesValue is 20', () => {
    visitor.cheaphopping()
    expect(cheapShop.salesValue).toBe(20)
  })
})
