import { OrderSearchContext, OrderSearchProvider } from "../../providers/OrdersSearchProvider"
import { Wrapper } from "./searchPartComponents/searchPartComponents.styled"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { CategoryBar } from "./searchPartComponents/CategoryBar"
import { DateBar } from "./searchPartComponents/DateBar"
import { statusOptions } from "./searchPartComponents/utils/statusOptions"

export const SearchOrderMenu = () => {
    return (
        <OrderSearchProvider>
            <CategoryBar options={statusOptions} context={OrderSearchContext} />
            <Wrapper>
                <DateBar />
                <SearchBar context={OrderSearchContext} />
            </Wrapper>
        </OrderSearchProvider>
    )
}