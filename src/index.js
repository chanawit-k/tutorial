import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'the pact'
  const author = 'chanawit'
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt="Best seller"
      />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
