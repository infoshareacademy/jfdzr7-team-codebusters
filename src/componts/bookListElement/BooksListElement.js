import { useContext } from "react"
import { BooksSearchContext } from "../../context/BooksSearchContext"
import { BookCard } from "./BookCard"

export const BooksListElement = ({ className }) => {
    const { booksList } = useContext(BooksSearchContext)
    return (
        <section className={className}>
            {booksList.map((book) => {
                return (
                    <BookCard
                        key={book.id}
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