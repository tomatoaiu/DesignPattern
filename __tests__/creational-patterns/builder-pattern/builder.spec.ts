import { Book, BookBuilder } from '../../../src/creational-patterns/builder-pattern/builder'

describe('Builder Pattern', () => {
  const bookBuilder = new BookBuilder()
  const book: Book = bookBuilder
    .setName('GoF')
    .setContext('Design Pattern')
    .setPage(100)
    .build()

  it('Book name is GoF', () => {
    expect(book.name).toBe('GoF')
  })

  it('Book context is Design Pattern', () => {
    expect(book.context).toBe('Design Pattern')
  })

  it('Book page is 100', () => {
    expect(book.page).toBe(100)
  })
})
