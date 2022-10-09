import { Wrapper } from "./searchPartComponents/searchPartComponents.styled"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { CategoryBar } from "./searchPartComponents/CategoryBar"
import { BookSearchProvider, BooksSearchContext } from "../../providers/BooksSearchProvider"
import { categoriesOfBooks } from "../../utils/categoriesOfBooks"
import { sortBookstoreOptions } from "./searchPartComponents/utils/constans"

export const SearchMenu = ({ checkedOption }) => {
    return (
        <BookSearchProvider checkedOption={checkedOption}>
            <form>
                <CategoryBar options={categoriesOfBooks} context={BooksSearchContext} />
                <Wrapper>
                    <SortBar sortOptions={sortBookstoreOptions} context={BooksSearchContext} />
                    <PriceBar context={BooksSearchContext} />
                    <SearchBar context={BooksSearchContext} />
                </Wrapper>
            </form>
        </BookSearchProvider>
    )
}