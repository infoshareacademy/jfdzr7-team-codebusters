import { useContext } from "react"
import { OrderListContext } from "../../../providers/OrderListProvider"
import { StyledTableHeader } from "./tableParts/StyledTableHeader"
import { StyledTableRecord } from "./tableParts/StyledTableRecord"

export const OrdersTable = ({ className }) => {
    const { orderList } = useContext(OrderListContext)
    const Element = orderList.map((order, index) => {
        return <StyledTableRecord key={index} order={order} statusik={order.status} index={index} />
    })
    return (
        <div className={className}>
            <StyledTableHeader />
            {Element}
        </div>
    )
}