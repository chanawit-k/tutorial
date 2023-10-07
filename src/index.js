import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { book_list } from './books'
import Book from './book'

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  const getBook = (id) => {
    const book = book_list.find((book) => book.id === id)
  }

  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {book_list.map((book, index) => {
          return (
            <Book {...book} key={book.title} getBook={getBook} number={index}>
              <p>test children</p>
            </Book>
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
