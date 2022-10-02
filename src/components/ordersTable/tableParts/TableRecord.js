import { useState } from "react"

import { OrderDetail } from "./OrderDetail"
import { dateToString } from "./../../../utils/dateToString"
import { StatusChangePanel } from "./statusInfoPanel/StatusChangePanel"
import { StatusInfoPanel } from "./statusInfoPanel/StatusInfoPanel"
import { expandOrHideOrderDetails } from "../utils/expandOrHideOrderDetails"
import { StyledTableRecord } from "../OrdersTable.styled"

export const TableRecord = ({ order, index, numberOfColumns }) => {
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)
    return (
        <StyledTableRecord
            numberOfColumns={numberOfColumns}
            index={index}
            onClick={event => expandOrHideOrderDetails(event)} >
            <p>{index + 1}</p>
            <p>{dateToString(order.orderDate)}</p>
            <p>{order.user.email}</p>
            <p>{order.orderValue}</p>
            {
                isEditStatusActive ?
                    <StatusChangePanel
                        order={order}
                        isEditStatusActive={isEditStatusActive}
                        setIsEditStatusActive={setIsEditStatusActive}
                    /> :
                    <StatusInfoPanel
                        status={order.status}
                        isEditStatusActive={isEditStatusActive}
                        setIsEditStatusActive={setIsEditStatusActive}
                    />
            }
            <OrderDetail positions={order.positions} userID={order.user.ID} />
        </StyledTableRecord >
    )
}