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
    id: '2S',
    img: 'https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'the pact',
    author: 'Christ Evan',
  },
]

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  return (
    <section className="booklist">
      {book_list.map((book) => {
        return (
          <Book {...book} key={book.title}>
            <p>test children</p>
          </Book>
        )
      })}
      <ExampleEvent />
    </section>
  )
}

const ExampleEvent = () => {
  const handleEventClick = (e) => {
    e.preventDefault()
    debugger
    alert('Click it')
  }

  return (
    <section>
      <form>
        <h2>sample form</h2>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => console.log(e.target.value)}
        />
        <button type="submit" onClick={handleEventClick}>
          Submit
        </button>
      </form>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img} alt="Best seller" />
      <h2>{title}</h2>
      <h2>{author}</h2>
      {children}
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
