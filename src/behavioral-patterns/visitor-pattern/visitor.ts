export class Shop {
  price: number
  salesValue: number

  constructor (price: number) {
    this.price = price
    this.salesValue = 0
  }

  sell (chip: number) {
    this.salesValue += this.price + chip
  }
}

export class LuxuryShop extends Shop {
  constructor (price: number) {
    super(price)
  }
}

export class CheapShop extends Shop {
  constructor (price: number) {
    super(price)
  }
}

export class Visitor {
  course: Array<Shop>

  constructor (course: Array<Shop>) {
    this.course = course
  }

  richShopping (): void {
    this.course
      .filter(shop => shop instanceof LuxuryShop)
      .forEach((shop) => {
        shop.sell(100)
      })
  }

  cheaphopping (): void {
    this.course
      .filter(shop => shop instanceof CheapShop)
      .forEach((shop) => {
        shop.sell(10)
      })
  }
}
