import { useContext } from "react"
import { BooksListContext } from "../../../../providers/BooksListProvider"
import { BookItem } from "./BookItem"
import { StyledBookItemHeader, StyledWarehouseList } from "./WarehousePage.styled"

export const WarehouseBooksElement = () => {
    const { booksList } = useContext(BooksListContext)
    return (
        <>
            <StyledBookItemHeader>
                <h2>Cover</h2>
                <h2>Title & Author</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
            </StyledBookItemHeader>
            <StyledWarehouseList>
                {booksList.map((book) => (
                    <BookItem
                        key={book.id}
                        {...book}
                    />
                ))}
            </StyledWarehouseList>
        </>

    )
}