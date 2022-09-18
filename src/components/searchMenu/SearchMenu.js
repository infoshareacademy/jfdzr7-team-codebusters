import { Wrapper } from "./searchPartComponents/Wrapper"
import { StyledSearchBar } from "./searchPartComponents/StyledSearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { useState, useEffect, useContext } from "react"
import { getBooksList } from "../../utils/getBooksList"
import { BooksSearchContext } from "../../context/BooksSearchContext"
import { BooksListContext } from "../../context/BooksListContext"


export const SearchMenu = () => {
    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    const [selectedSortOption, setSelectedSortOption] = useState('title')
    const [selectedPriceRange, setSelectedPriceRange] = useState({
        minPrice: 0,
        maxPrice: 400
    })
    const [searchText, setSearchText] = useState('')
    const { setBooksList } = useContext(BooksListContext)
    useEffect(() => {
        getBooksList({ setBooksList, checkedCategoryOfBook, selectedSortOption, selectedPriceRange, searchText })
    }, [searchText, selectedPriceRange, checkedCategoryOfBook, selectedSortOption])

    return (
        <BooksSearchContext.Provider value={{
            checkedCategoryOfBook, setCheckedCategoryOfBook,
            selectedSortOption, setSelectedSortOption,
            selectedPriceRange, setSelectedPriceRange,
            searchText, setSearchText
        }}>
            <form>
                <StyledCategoryBar />
                <Wrapper>
                    <SortBar />
                    <PriceBar />
                    <StyledSearchBar />
                </Wrapper>
            </form>
        </BooksSearchContext.Provider>
    )
}