import './styles/App.css'
import { BookList } from './components/BookList'
import { AddBookForm } from './components/AddBookForm'
import { bookFactory } from './bookFactory'
import { useState } from 'react'

function randomID() {
  return crypto.randomUUID()
}

function App() {
  const [books, setBooks] = useState([])

  const addBook = (title, author, year, categories, pages, pagesRead, read) => {
    const newBook = bookFactory(
      title,
      author,
      year,
      categories,
      pages,
      pagesRead,
      read,
      randomID()
    )
    setBooks((prevBooks) => [...prevBooks, newBook])
  }

  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id)
    setBooks(filteredBooks)
  }

  return (
    <div className="app">
      <h1>My library</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <AddBookForm addBook={addBook} />
    </div>
  )
}

export default App
