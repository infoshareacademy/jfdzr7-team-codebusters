import { Wrapper } from "./searchPartComponents/searchPartComponents.styled"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { CategoryBar } from "./searchPartComponents/CategoryBar"
import { BookSearchProvider, BooksSearchContext } from "../../providers/BooksSearchProvider"
import { categoriesOfBooks } from "../../utils/categoriesOfBooks"

export const SearchMenu = () => {
    return (
        <BookSearchProvider>
            <form>
                <CategoryBar options={categoriesOfBooks} context={BooksSearchContext} />
                <Wrapper>
                    <SortBar />
                    <PriceBar />
                    <SearchBar context={BooksSearchContext} />
                </Wrapper>
            </form>
        </BookSearchProvider>
    )
}