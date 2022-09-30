import { useState } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import { dateToString } from "./../../../utils/dateToString"
import { StatusChangePanel } from "./StatusChangePanel"
import { StatusInfoPanel } from "./StatusInfoPanel"
import { expandOrHideOrderDetails } from "../utils/expandOrHideOrderDetails"

export const TableRecord = ({ className, order, index }) => {
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)
    return (
        <div className={className} onClick={event => expandOrHideOrderDetails(event)} >
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
            <StyledOrderDetail positions={order.positions} userID={order.user.ID} />
        </div >
    )
}