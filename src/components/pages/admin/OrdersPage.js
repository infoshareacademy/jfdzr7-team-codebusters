import { OrderListProvider } from "../../../providers/OrderListProvider"
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar"
import { SearchOrderMenu } from "../../searchMenu/SearchOrderMenu"
import { OrdersTable } from "../../ordersTable/OrdersTable"
import { StyledOrdersPage } from "./OrdersPage.styled"

export const OrdersPage = () => {
    return (
        <StyledOrdersPage>
            <OrderListProvider>
                <SearchOrderMenu />
                <StyledDecorationBar />
                <OrdersTable
                    headers={['lp', 'date', 'user', 'cost', 'status']}
                />
            </OrderListProvider>
        </StyledOrdersPage>
    )
}