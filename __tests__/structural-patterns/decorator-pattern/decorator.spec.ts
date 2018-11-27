import { Rice, SalmonRice, Ochazuke } from '../../../src/structural-patterns/decorator-pattern/decorator'

describe('Decorator Pattern', () => {
  const salmonRice: Rice = new SalmonRice(new Rice());
  const ochazuke: Rice = new Ochazuke(new Rice());
  const salmonRiceOchazuke: Rice = new Ochazuke(new SalmonRice(new Rice()));


  it('salmonRice is salmon rice', () => {
    expect(salmonRice.topping).toBe('salmon rice');
  });

  it('ochazuke is salmon rice', () => {
    expect(ochazuke.topping).toBe('tea rice');
  });

  it('salmonRiceOchazuke is tea salmon rice', () => {
    expect(salmonRiceOchazuke.topping).toBe('tea salmon rice');
  });
});
