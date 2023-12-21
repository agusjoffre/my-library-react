import { useState } from 'react'

export function AddBookForm({ addBook }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [categories, setCategories] = useState('')
  const [pages, setPages] = useState('')
  const [pagesRead, setPagesRead] = useState('')
  const [read, setRead] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title, author, year, categories, pages, pagesRead, read)
    setTitle('')
    setAuthor('')
    setYear('')
    setCategories('')
    setPages('')
    setPagesRead('')
    setRead(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        className="author-input"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="number"
        className="year-input"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
      />
      <input
        type="text"
        className="categories-input"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Genre"
      />
      <input
        type="number"
        className="pages-input"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
        placeholder="Pages"
      />
      <input
        type="number"
        className="pagesRead-input"
        value={pagesRead}
        onChange={(e) => setPagesRead(e.target.value)}
        placeholder="Pages read"
      />
      <input
        id="read"
        className="book-read"
        type="checkbox"
        checked={read}
        onChange={(e) => setRead(e.target.checked)}
      />
      <label htmlFor="read">Finished</label>
      <button type="submit" className="add-book">
        Add book
      </button>
    </form>
  )
}
