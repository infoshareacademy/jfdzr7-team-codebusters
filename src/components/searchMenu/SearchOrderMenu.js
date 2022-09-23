import { OrderSearchContext, OrderSearchProvider } from "../../providers/OrdersSearchProvider"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"
import { statusOptions } from './searchPartComponents/utils/statusOptions'

export const SearchOrderMenu = () => {
    return (
        <OrderSearchProvider>
            <StyledCategoryBar options={statusOptions} context={OrderSearchContext} />
        </OrderSearchProvider>
    )
}