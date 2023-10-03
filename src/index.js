import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const book_list = [
  {
    img: 'https://m.media-amazon.com/images/I/91ke43dIxkL._SY466_.jpg',
    title: 'Iron Flame',
    author: 'Rebecca Yarros',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41p6OBQLfXL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    title: 'the pact',
    author: 'Christ Evan',
  },
]

const friends = ['john', 'peter', 'anna']
const newFriends = [...friends, 'susan']
console.log(friends)
console.log(newFriends)
const someObject = {
  name: 'john',
  job: 'developer',
}
// COPY NOT A REFERENCE !!!!
const newObject = { ...someObject, location: 'florida' }
console.log(someObject)
console.log(newObject)

// ต้องขึ่้นต้นตัวใหญ่เสมอ
const Booklist = () => {
  return (
    <section className="booklist">
      {book_list.map((book) => {
        return <Book book={book}></Book>
      })}
    </section>
  )
}

const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <img src={img} alt="Best seller" />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Booklist />)
