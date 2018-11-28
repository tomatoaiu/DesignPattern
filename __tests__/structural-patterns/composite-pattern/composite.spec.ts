import { ParentComponnet, ChildComponent } from '../../../src/structural-patterns/composite-pattern/composite';

describe('Composite Pattern', () => {
  const app: ParentComponnet = new ParentComponnet('app');
  app.add(new ChildComponent('header'));
  app.add(new ParentComponnet('body'));
  app.add(new ChildComponent('footer'));
  const body: ParentComponnet = app.children.get('body');
  body.add(new ChildComponent('text'));

  it('app children length is 3', () => {
    expect(app.children.size).toBe(3);
  });

  it('body children length is 1', () => {
    expect(body.children.size).toBe(1);
  });
});
