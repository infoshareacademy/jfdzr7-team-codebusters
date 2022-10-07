import { useContext } from "react"

import { OrderSearchContext, OrderSearchProvider } from "../../providers/OrdersSearchProvider"
import { Wrapper } from "./searchPartComponents/searchPartComponents.styled"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { CategoryBar } from "./searchPartComponents/CategoryBar"
import { DateBar } from "./searchPartComponents/DateBar"
import { statusOptions } from "./searchPartComponents/utils/statusOptions"
import { AuthContext } from "../../providers/AuthProvider"

export const SearchOrderMenu = () => {
    const { isAdmin } = useContext(AuthContext)
    return (
        <OrderSearchProvider>
            <CategoryBar options={statusOptions} context={OrderSearchContext} />
            <Wrapper>
                <DateBar />
                {isAdmin && <SearchBar context={OrderSearchContext} />}
            </Wrapper>
        </OrderSearchProvider>
    )
}