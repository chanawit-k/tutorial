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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Best seller"
  />
)
const Title = () => {
  const inlineStyle = {
    color: 'red',
    fontSize: '2rem',
    marginTop: '1rem',
  }
  return <h2 style={inlineStyle}>The PAct</h2>
}
const Author = () => (
  <h2 style={{ color: 'blue', fontSize: '1rem', marginTop: '1rem' }}>
    Author Name
  </h2>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
