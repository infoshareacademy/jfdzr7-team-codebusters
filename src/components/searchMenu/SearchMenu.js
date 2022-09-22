import { Wrapper } from "./searchPartComponents/Wrapper"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { BookSearchProvider } from "../../providers/BooksSearchProvider"

export const SearchMenu = () => {
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