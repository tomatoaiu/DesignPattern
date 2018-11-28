import { Human } from '../../../src/structural-patterns/proxy-pattern/proxy'

describe('Proxy Pattern', () => {
  const ichiro: Human = new Human();

  it('ichiro move on ground is by car', () => {
    expect(ichiro.moveOn('ground')).toBe('by car');
  });

  it('ichiro move on sea is by boat', () => {
    expect(ichiro.moveOn('sea')).toBe('by boat');
  });

  it('ichiro move on sky is by car', () => {
    expect(ichiro.moveOn('sky')).toBe('by airplane');
  });
})
