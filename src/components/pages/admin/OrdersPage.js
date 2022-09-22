import { OrderListProvider } from "../../../providers/OrderListProvider"
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar"
import { SearchOrderMenu } from "../../searchMenu/SearchOrderMenu"
import { StyledOrdersTable } from "./StyledOrdersTable"

export const OrdersPage = ({ className }) => {
    return (
        <div className={className}>
            <OrderListProvider>
                <SearchOrderMenu />
                <StyledDecorationBar />
                <StyledOrdersTable />
            </OrderListProvider>

        </div>

    )
}