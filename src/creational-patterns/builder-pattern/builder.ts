export class Book {
  name: String
  context: String
  page: Number

  constructor (bookBuilder: BookBuilder) {
    this.name = bookBuilder.name
    this.context = bookBuilder.context
    this.page = bookBuilder.page
  }
}

export class BookBuilder {
  name: String
  context: String
  page: Number

  setName (name: String): BookBuilder {
    this.name = name
    return this
  }

  setContext (context: String): BookBuilder {
    this.context = context
    return this
  }

  setPage (page: Number): BookBuilder {
    this.page = page
    return this
  }

  build (): Book {
    return new Book(this)
  }
}
