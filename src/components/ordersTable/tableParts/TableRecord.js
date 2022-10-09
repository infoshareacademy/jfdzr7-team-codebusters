import { useContext, useState } from "react"

import { OrderDetail } from "./OrderDetail"
import { dateToString } from "./../../../utils/dateToString"
import { StatusChangePanel } from "./statusInfoPanel/StatusChangePanel"
import { StatusInfoPanel } from "./statusInfoPanel/StatusInfoPanel"
import { expandOrHideOrderDetails } from "../utils/expandOrHideOrderDetails"
import { StyledTableRecord } from "../OrdersTable.styled"
import { AuthContext } from "../../../providers/AuthProvider"

export const TableRecord = ({ order, index, numberOfColumns }) => {
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)
    const { isAdmin } = useContext(AuthContext)
    const changeStatus = (newStatus) => {
        order.status = newStatus
    }
    return (
        <StyledTableRecord
            numberOfColumns={numberOfColumns}
            onClick={event => expandOrHideOrderDetails(event)} >
            <p>{index + 1}</p>
            <p>{dateToString(order.orderDate)}</p>
            {isAdmin && <p>{order.user.email}</p>}
            <p>{order.orderValue}</p>
            {
                isEditStatusActive ?
                    <StatusChangePanel
                        order={order}
                        isEditStatusActive={isEditStatusActive}
                        setIsEditStatusActive={setIsEditStatusActive}
                        changeStatus={changeStatus}
                    /> :
                    <StatusInfoPanel
                        status={order.status}
                        isEditStatusActive={isEditStatusActive}
                        setIsEditStatusActive={setIsEditStatusActive}
                    />
            }
            <OrderDetail positions={order.positions} userData={order.user} />
        </StyledTableRecord >
    )
}