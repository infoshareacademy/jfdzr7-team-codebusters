import { OrderSearchContext, OrderSearchProvider } from "../../providers/OrdersSearchProvider"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { statusOptions } from './searchPartComponents/utils/statusOptions'

export const SearchOrderMenu = () => {
    return (
        <OrderSearchProvider>
            <StyledCategoryBar options={statusOptions} context={OrderSearchContext} />
            <SearchBar context={OrderSearchContext} />
        </OrderSearchProvider>
    )
}