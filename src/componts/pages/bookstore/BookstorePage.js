import { useEffect, useState } from "react"
import { SearchMenu } from "../../searchMenu/SearchMenu"
import { BooksSearchContext } from "../../../context/BooksSearchContext"
import { StyledBooksListElement } from "./StyledBooksListElement"
import { getBooksList } from "../../../utils/getBooksList"
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar"

export const BookstorePage = () => {

    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    const [selectedSortOption, setSelectedSortOption] = useState('title')
    const [selectedPriceRange, setSelectedPriceRange] = useState({
        minPrice: 0,
        maxPrice: 400
    })
    const [searchText, setSearchText] = useState('')

    const [booksList, setBooksList] = useState([])



    useEffect(() => {
        getBooksList({ setBooksList, checkedCategoryOfBook, selectedSortOption, selectedPriceRange, searchText })
    }, [searchText, selectedPriceRange, checkedCategoryOfBook, selectedSortOption])

    return (
        <main>
            <BooksSearchContext.Provider value={{
                checkedCategoryOfBook, setCheckedCategoryOfBook,
                selectedSortOption, setSelectedSortOption,
                selectedPriceRange, setSelectedPriceRange,
                booksList, setBooksList,
                searchText, setSearchText
            }}>
                <SearchMenu />
                <StyledDecorationBar />
                <StyledBooksListElement />
            </BooksSearchContext.Provider>
        </main >
    )
}