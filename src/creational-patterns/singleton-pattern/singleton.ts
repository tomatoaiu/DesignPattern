export class OnlyOne {

  private static onlyOne: OnlyOne

  public static getInstance(): OnlyOne {
    if (!OnlyOne.onlyOne) {
        OnlyOne.onlyOne = new OnlyOne()
    }
    return OnlyOne.onlyOne
  }
}
