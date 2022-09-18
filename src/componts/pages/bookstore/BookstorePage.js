import { useState } from "react"
import { BooksListContext } from "../../../context/BooksListContext"
import { SearchMenu } from "../../searchMenu/SearchMenu"
import { StyledBooksListElement } from "./StyledBooksListElement"
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar"

export const BookstorePage = () => {
    const [booksList, setBooksList] = useState([])
    return (
        <main>
            <BooksListContext.Provider value={{
                booksList, setBooksList
            }}>
                <SearchMenu />
                <StyledDecorationBar />
                <StyledBooksListElement />
            </BooksListContext.Provider>
        </main >
    )
}