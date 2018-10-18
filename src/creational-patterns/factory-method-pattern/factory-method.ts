// 参考: https://qiita.com/shoheiyokoyama/items/d752834a6a2e208b90ca

abstract class Product {
    public abstract use (): String
}

abstract class Factory {

    public create (owner: String): Product {
        const product: Product = this.createProduct(owner)
        this.registerProduct(product)
        return product
    }

    protected abstract createProduct(owner: String): Product
    protected abstract registerProduct(product: Product): void
}

class AccountFactory extends Factory {

    private owners: String[]

    constructor () {
        super()
        this.owners = []
    }

    protected createProduct (owner: String): Product {
        return new Account(owner)
    }

    protected registerProduct (product: Product): void {
        this.owners.push( (product as Account).getOwner() )
    }

    public getOwners(): String[] {
        return this.owners
    }
}

class Account extends Product {

    private owner: String

    constructor (owner: String) {
        super()
        this.owner = owner
    }

    public use (): String {
        return `Use account: ${this.owner}`
    }
    public getOwner (): String {
        return this.owner
    }
}

export {
  Factory,
  AccountFactory,
  Product
}
