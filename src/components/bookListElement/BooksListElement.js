import { useContext } from "react"

import { BooksListContext } from "../../providers/BooksListProvider"
import { BookCard } from "./BookCard"
import { StyledBooksListElement } from "./BooksListElement.styled"

export const BooksListElement = () => {
    const { booksList } = useContext(BooksListContext)
    return (
        <StyledBooksListElement>
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
        </StyledBooksListElement>
    )
}