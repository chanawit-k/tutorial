const Book = (props) => {
  const { img, title, author, id, getBook, number } = props
  const getSingleBook = () => {
    getBook(id)
  }
  // ถ้าเรียก getbook ตรงๆ มันจะทำทันทีตอน run เพราะเป็นการเรียก fn

  return (
    <article className="book">
      <p class="number">{`#${number + 1}`}</p>
      <img src={img} alt="Best seller" />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  )
}

export default Book
