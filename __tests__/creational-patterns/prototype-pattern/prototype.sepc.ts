import { Template, ClassDiagram, SequenceDiagram } from '../../../src/creational-patterns/prototype-pattern/prototype';

describe('Prototype Pattern', () => {
  const template: Template = new Template();
  template.set(new ClassDiagram('Attack'));
  template.set(new SequenceDiagram('Defense'));

  it('Attack is ClassDiagram', () => {
    expect(template.clone('Attack')).toBeInstanceOf(ClassDiagram);
  });

  it('Defense is SequenceDiagram', () => {
    expect(template.clone('Defense')).toBeInstanceOf(SequenceDiagram);
  });
});
