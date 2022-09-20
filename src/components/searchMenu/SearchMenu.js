import { Wrapper } from "./searchPartComponents/Wrapper"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { useState, useEffect, useContext } from "react"
import { getBooksList } from "../../utils/getBooksList"
import { BooksSearchContext } from "../../providers/BooksSearchContext"
import { BooksListContext } from "../../providers/BooksListProvider"

export const SearchMenu = () => {
    const [searchConditions, setSearchConditions] = useState({
        checkedCategoryOfBook: 'all',
        selectedSortOption: 'title',
        selectedPriceRange: {
            minPrice: 0,
            maxPrice: 400
        },
        searchText: ''
    })
    const { setBooksList } = useContext(BooksListContext)
    useEffect(() => {
        getBooksList({ setBooksList, ...searchConditions })
    }, [searchConditions, setBooksList])
    return (
        <BooksSearchContext.Provider value={{
            searchConditions, setSearchConditions
        }}>
            <form>
                <StyledCategoryBar />
                <Wrapper>
                    <SortBar />
                    <PriceBar />
                    <SearchBar />
                </Wrapper>
            </form>
        </BooksSearchContext.Provider>
    )
}