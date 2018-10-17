// 参考: https://qiita.com/shoheiyokoyama/items/d752834a6a2e208b90ca

function main (): void {
    const factory: Factory  = new AccountFactory()
    const account1: Product = factory.create('Ralph Johnson')
    const account2: Product = factory.create('Richard Helm')
    const account3: Product = factory.create('John Vlissides')
    const account4: Product = factory.create('Erich Gamma')

    account1.use()
    account2.use()
    account3.use()
    account4.use()     
}

abstract class Product {
    public abstract use (): void
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
        console.log(`Create account: ${owner}`)
        this.owner = owner
    }

    public use (): void {
        console.log(`Use account: ${this.owner}`)
    }
    public getOwner (): String {
        return this.owner
    }
}

main()
