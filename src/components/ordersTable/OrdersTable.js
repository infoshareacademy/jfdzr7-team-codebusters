import { useContext } from "react"

import { OrderListContext } from "./../../providers/OrderListProvider"
import { TableHeader } from "./tableParts/TableHeader"
import { TableRecord } from "./tableParts/TableRecord"
import { StyledOrdersTable } from "./OrdersTable.styled"

export const OrdersTable = ({ className, headers }) => {
    const { orderList } = useContext(OrderListContext)
    const numberOfColumns = headers.length
    return (
        <StyledOrdersTable>
            <TableHeader
                headers={headers}
                numberOfColumns={numberOfColumns}
            />
            {
                orderList.map((order, index) => {
                    return <TableRecord
                        key={index}
                        order={order}
                        index={index}
                        numberOfColumns={numberOfColumns} />
                })
            }
        </StyledOrdersTable>
    )
}