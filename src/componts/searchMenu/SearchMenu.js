import { StyledSearchBar, Wrapper } from "./searchPartComponents/Wrapper"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"

export const SearchMenu = () => {
    return (
        <form>
            <StyledCategoryBar />
            <Wrapper>
                <SortBar />
                <PriceBar />
                <StyledSearchBar />
            </Wrapper>
        </form>
    )
}