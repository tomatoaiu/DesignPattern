// reference https://github.com/torokmark/design_patterns_in_typescript/blob/master/singleton/singleton.ts

export class OnlyOne {

  private static onlyOne: OnlyOne

  public static getInstance(): OnlyOne {
    if (!OnlyOne.onlyOne) {
        OnlyOne.onlyOne = new OnlyOne()
    }
    return OnlyOne.onlyOne
  }
}
