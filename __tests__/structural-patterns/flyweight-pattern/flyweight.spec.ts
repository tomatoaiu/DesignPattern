import { Garage } from '../../../src/structural-patterns/flyweight-pattern/flyweight'

describe('Flyweight Pattern', () => {
  const myGarage: Garage = new Garage();

  const porsche = myGarage.use('porsche');
  const toyota = myGarage.use('toyota');

  it('porsche car is my garage porsche car', () => {
    expect(myGarage.use('porsche')).toBe(porsche)
  });

  it('toyota car is my garage toyota car', () => {
    expect(myGarage.use('toyota')).toBe(toyota)
  });
});
