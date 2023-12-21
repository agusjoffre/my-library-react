export function Book({ B, deleteBook }) {
  return (
    <div className="card">
      <div className="card-top">
        <button className="card-delete" onClick={() => deleteBook(B.id)}>
          Delete
        </button>
      </div>
      <div className="card-bottom">
        <div className="book-title">{B.title}</div>
        <div className="book-year">{B.year}</div>
        <div className="book-author">{B.author}</div>
        <div className="book-categories">{B.categories}</div>
        <div className="book-pages">{B.pages} pages</div>
        {B.pagesRead > 1 && (
          <div className="book-pagesRead">{B.pagesRead} pages readed</div>
        )}
        <input id="read" className="book-read" type="checkbox" value={B.read} />
        <label htmlFor="read">Finished</label>
      </div>
    </div>
  )
}
