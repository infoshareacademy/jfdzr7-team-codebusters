import { createContext, useContext, useState, useEffect } from "react";
import { getWarehouseList } from "../utils/getWarehouseList"
import { BooksListContext } from "./BooksListProvider"

export const WarehouseSearchContext = createContext({})

export const WarehouseSearchProvider = ({ children }) => {

    const { setBooksList } = useContext(BooksListContext)
    const [searchConditions, setSearchConditions] = useState({
        checkedOption: 'all',
        selectedSortOption: 'title',
        selectedPriceRange: {
            minPrice: 0,
            maxPrice: 400
        },
        selectedQuantityRange: {
            minQuantity: 0,
            maxQuantity: 1000
        },
        searchText: ''
    })

    useEffect(() => {
        getWarehouseList({ setBooksList, ...searchConditions })
    }, [searchConditions, setBooksList])

    return (
        <WarehouseSearchContext.Provider value={{ searchConditions, setSearchConditions }}>
            {children}
        </WarehouseSearchContext.Provider>
    )
}