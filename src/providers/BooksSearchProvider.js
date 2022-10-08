import { createContext, useContext, useState, useEffect } from "react";
import { getBooksList } from "../utils/getBooksList"
import { BooksListContext } from "./BooksListProvider"

export const BooksSearchContext = createContext({})

export const BookSearchProvider = ({ children }) => {
    const { setBooksList } = useContext(BooksListContext)
    const [searchConditions, setSearchConditions] = useState({
        checkedOption: 'all',
        selectedSortOption: 'title',
        selectedPriceRange: {
            minPrice: 0,
            maxPrice: 400
        },
        searchText: ''
    })

    useEffect(() => {
        getBooksList({ setBooksList, ...searchConditions })
    }, [searchConditions, setBooksList])

    return (
        <BooksSearchContext.Provider value={{ searchConditions, setSearchConditions }}>
            {children}
        </BooksSearchContext.Provider>
    )
}