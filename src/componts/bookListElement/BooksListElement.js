import { useContext } from "react"
import { BooksListContext } from "../../context/BooksListContext"
import { BookCard } from "./BookCard"

export const BooksListElement = ({ className }) => {
    const { booksList } = useContext(BooksListContext)
    return (
        <section className={className}>
            {booksList.map((book) => {
                return (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        cover={book.cover}
                        quantity={book.quantity}
                    />
                )
            })}
        </section>
    )
}