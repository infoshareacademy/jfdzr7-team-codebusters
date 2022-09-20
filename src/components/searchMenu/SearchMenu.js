import { Wrapper } from "./searchPartComponents/Wrapper"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { useState, useEffect, useContext } from "react"
import { getBooksList } from "../../utils/getBooksList"
import { BookSearchProvider, BooksSearchContext } from "../../providers/BooksSearchProvider"
import { BooksListContext } from "../../providers/BooksListProvider"

export const SearchMenu = () => {
    const { setBooksList } = useContext(BooksListContext)
    return (
        < BookSearchProvider >

            <form>
                <StyledCategoryBar />
                <Wrapper>
                    <SortBar />
                    <PriceBar />
                    <SearchBar />
                </Wrapper>
            </form>
        </BookSearchProvider >
    )
}