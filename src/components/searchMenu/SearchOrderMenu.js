import { OrderSearchProvider } from "../../providers/OrdersSearchProvider"

export const SearchOrderMenu = () => {
    return (
        <OrderSearchProvider>
            <div>Search Order Menu</div>
        </OrderSearchProvider>
    )
}