import { useEffect, useState } from "react"

import { BookCard } from "../../bookListElement/BookCard"
import { StyledH2, StyledBestSellers } from "./Home.styled";
import { getBestsellers } from "../../../utils/getBestsellers";


export const BestSellers = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBestsellers(setBooks)
    }, [])

    return (
        <>
            <StyledH2><span>We recommend our best-selling books</span></StyledH2>
            <StyledBestSellers>
                {books.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            book={book}
                            title={book.title}
                            author={book.author}
                            price={book.price}
                            cover={book.cover}
                            quantity={book.quantity}
                        />
                    )
                })}
            </StyledBestSellers>
        </>
    )
}
