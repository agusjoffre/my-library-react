export const bookFactory = (
  title = '',
  author = '',
  year = '',
  categories = '',
  pages = 0,
  pagesRead = 0,
  read = false,
  id
) => {
  return { title, author, year, categories, pages, pagesRead, read, id }
}
