import { useContext } from "react"
import { BooksListContext } from "../../../../providers/BooksListProvider"
import { DecorationBar } from "../../../decorationBar/DecorationBar"

export const WarehouseBooksElement = () => {
    const { booksList } = useContext(BooksListContext)
    return (
        <div>
            {booksList.map((book) => {
                return (
                    <div key={book.id}>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.quantity}</p>
                        <DecorationBar />
                    </div>
                )
            })
            }
        </div >
    )
}