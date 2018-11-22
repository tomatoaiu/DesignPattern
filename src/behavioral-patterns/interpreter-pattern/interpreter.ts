abstract class Expression {

}

export class Minus extends Expression {
  execute (left: number, right: number): number {
    return left - right;
  }
}

export class Plus extends Expression {
  execute (left: number, right: number): number {
    return left + right;
  }
}
