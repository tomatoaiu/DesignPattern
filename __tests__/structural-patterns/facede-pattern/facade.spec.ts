import { Carpenter } from '../../../src/structural-patterns/facede-pattern/facade';

describe('Facade Pattern', () => {
  const taro: Carpenter = new Carpenter();
  const house = taro.build();

  it('taro build house by carpenter', () => {
    expect(house.name).toBe('build by carpenter');
  });
});
