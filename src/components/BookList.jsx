import { Book } from './Book'

export function BookList({ books, deleteBook }) {
  return (
    <div className="list-container">
      <div className="list-top">
        <h1>My books</h1>
      </div>
      <div className="list-bottom">
        {books.map((book) => (
          <Book key={book.id} B={book} deleteBook={deleteBook} />
        ))}
      </div>
    </div>
  )
}
