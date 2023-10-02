import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const title = 'the pact'
const author = 'chanawit'
const img =
  'https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  return (
    <section className="booklist">
      <Book title={title} author={author} img={img}>
        <p>Test Children props</p>
        <button>Click ME</button>
      </Book>
      <Book title={title} author={author} img={img} />
    </section>
  )
}

const Book = ({ title, author, img, children }) => {
  return (
    <article className="book">
      <img src={img} alt="Best seller" />
      <h2>{title}</h2>
      {children}
      <h2>{author}</h2>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
