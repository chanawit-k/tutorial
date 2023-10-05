import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const book_list = [
  {
    id: '1',
    img: 'https://m.media-amazon.com/images/I/91ke43dIxkL._SY466_.jpg',
    title: 'Iron Flame',
    author: 'Rebecca Yarros',
  },
  {
    id: '2',
    img: 'https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'the pact',
    author: 'Christ Evan',
  },
]

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  const getBook = (id) => {
    const book = book_list.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      {book_list.map((book) => {
        return (
          <Book {...book} key={book.title} getBook={getBook}>
            <p>test children</p>
          </Book>
        )
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, id, getBook } = props
  const getSingleBook = () => {
    getBook(id)
  }
  // ถ้าเรียก getbook ตรงๆ มันจะทำทันทีตอน run เพราะเป็นการเรียก fn

  return (
    <article className="book">
      <img src={img} alt="Best seller" />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <button type="button" onClick={getSingleBook}>
        show Diff
      </button>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
