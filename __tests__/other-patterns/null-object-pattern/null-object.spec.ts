import { HASNAME, NullObject, Human } from '../../../src/other-patterns/null-object-pattern/null-object'

describe('NullObject Pattern', () => {
  const list: Array<HASNAME> = [];
  list.push(new Human('SHOHEI'));
  list.push(new NullObject());
  list.push(new Human('TANAKA'));

  it('list 0 name is SHOHEI', () => {
    expect(list[0].name).toBe('SHOHEI');
  });

  it('list 1 name is null name', () => {
    expect(list[1].name).toBe('null name');
  });

  it('list 2 name is TANAKA', () => {
    expect(list[2].name).toBe('TANAKA');
  });
});
