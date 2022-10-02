import { OrderSearchContext, OrderSearchProvider } from "../../providers/OrdersSearchProvider"
import { Wrapper } from "./searchPartComponents/Wrapper"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { StyledDateBar } from "./searchPartComponents/StyledDateBar"
import { statusOptions } from "./searchPartComponents/utils/statusOptions"

export const SearchOrderMenu = () => {
    return (
        <OrderSearchProvider>
            <StyledCategoryBar options={statusOptions} context={OrderSearchContext} />
            <Wrapper>
                <StyledDateBar />
                <SearchBar context={OrderSearchContext} />
            </Wrapper>
        </OrderSearchProvider>
    )
}