import { Wrapper } from "./searchPartComponents/Wrapper"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { BookSearchProvider, BooksSearchContext } from "../../providers/BooksSearchProvider"
import { categoriesOfBooks } from '../../utils/categoriesOfBooks'

export const SearchMenu = () => {
    return (
        < BookSearchProvider >
            <form>
                <StyledCategoryBar options={categoriesOfBooks} context={BooksSearchContext} />
                <Wrapper>
                    <SortBar />
                    <PriceBar />
                    <SearchBar />
                </Wrapper>
            </form>
        </BookSearchProvider >
    )
}