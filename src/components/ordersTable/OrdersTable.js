import { useContext } from "react"

import { OrderListContext } from "./../../providers/OrderListProvider"
import { TableHeader } from "./tableParts/TableHeader"
import { TableRecord } from "./tableParts/TableRecord"
import { StyledOrdersTable } from "./OrdersTable.styled"

export const OrdersTable = ({ headers }) => {
    const { orderList } = useContext(OrderListContext)
    const numberOfColumns = headers.length
    console.log(orderList)
    return (
        <StyledOrdersTable>
            <TableHeader
                headers={headers}
                numberOfColumns={numberOfColumns}
            />
            {
                orderList.map((order, index) => {
                    return <TableRecord
                        key={order.id}
                        index={index}
                        order={order}
                        numberOfColumns={numberOfColumns} />
                })
            }
        </StyledOrdersTable>
    )
}