import { Pot, StewFactory, createStewFactory, CreamStew, BeefStew } from '../../../src/creational-patterns/abstract-factory-pattern/abstract-factory';

describe ('', () => {
  const pot: Pot = new Pot();
  const stewFactory: StewFactory = createStewFactory('beef');
  pot.add(stewFactory.getVegetable());
  pot.add(stewFactory.getMeat());
  pot.add(stewFactory.getSauce());

  it ('pot contents length is 3', () => {
    expect(pot.contents.length).toBe(3)
  });

  it ('stewFactory is BeefStew', () => {
    expect(stewFactory).toBeInstanceOf(BeefStew);
  });

  const pot2: Pot = new Pot();
  const stewFactory2: StewFactory = createStewFactory('cream');
  pot2.add(stewFactory2.getVegetable());
  pot2.add(stewFactory2.getMeat());
  pot2.add(stewFactory2.getSauce());

  it ('pot contents length is 3', () => {
    expect(pot2.contents.length).toBe(3)
  });

  it ('stewFactory2 is CreamStew', () => {
    expect(stewFactory2).toBeInstanceOf(CreamStew);
  });
});
