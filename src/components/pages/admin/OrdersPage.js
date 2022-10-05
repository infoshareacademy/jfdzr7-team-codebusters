import { OrderListProvider } from "../../../providers/OrderListProvider"
import { DecorationBar } from "../../decorationBar/DecorationBar"
import { SearchOrderMenu } from "../../searchMenu/SearchOrderMenu"
import { OrdersTable } from "../../ordersTable/OrdersTable"
import { StyledOrdersPage } from "./OrdersPage.styled"

export const OrdersPage = () => {
    return (
        <StyledOrdersPage>
            <OrderListProvider>
                <SearchOrderMenu />
                <DecorationBar />
                <OrdersTable
                    headers={['lp', 'date', 'user', 'cost', 'status']}
                />
            </OrderListProvider>
        </StyledOrdersPage>
    )
}