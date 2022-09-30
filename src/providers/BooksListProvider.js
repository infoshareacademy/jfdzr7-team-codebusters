import { createContext, useState } from "react";

export const BooksListContext = createContext([])

export const BooksListProvider = ({ children }) => {
    const [booksList, setBooksList] = useState([])
    return (
        <BooksListContext.Provider value={{
            booksList, setBooksList
        }}>
            {children}
        </BooksListContext.Provider>
    )
}