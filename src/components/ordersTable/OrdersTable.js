import { useContext } from "react"
import { OrderListContext } from "./../../providers/OrderListProvider"
import { StyledTableHeader } from "./tableParts/StyledTableHeader"
import { StyledTableRecord } from "./tableParts/StyledTableRecord"

export const OrdersTable = ({ className, headers }) => {
    const { orderList } = useContext(OrderListContext)
    const numberOfColumns = headers.length
    return (
        <div className={className}>
            <StyledTableHeader
                headers={headers}
                numberOfColumns={numberOfColumns}
            />
            {
                orderList.map((order, index) => {
                    return <StyledTableRecord
                        key={index}
                        order={order}
                        index={index}
                        numberOfColumns={numberOfColumns} />
                })
            }
        </div>
    )
}