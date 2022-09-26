import { OrderListProvider } from "../../../providers/OrderListProvider"
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar"
import { SearchOrderMenu } from "../../searchMenu/SearchOrderMenu"
import { StyledOrdersTable } from "../../ordersTable/StyledOrdersTable"

export const OrdersPage = ({ className }) => {
    return (
        <div className={className}>
            <OrderListProvider>
                <SearchOrderMenu />
                <StyledDecorationBar />
                <StyledOrdersTable
                    headers={['lp', 'date', 'user', 'cost', 'status']}
                />
            </OrderListProvider>
        </div>
    )
}