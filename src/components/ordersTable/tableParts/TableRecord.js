import { useState, useEffect } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import { getUserData } from '../../../utils/gerUserData'
import { dateToString } from "./../../../utils/dateToString"
import { StatusChangePanel } from "./StatusChangePanel"
import { StatusInfoPanel } from "./StatusInfoPanel"
import { expandOrHideOrderDetails } from "../utils/expandOrHideOrderDetails"

export const TableRecord = ({ className, order, index }) => {
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        getUserData(setUserData, order.user.ID)
    }, [order.user.ID])

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
            <StyledOrderDetail positions={order.positions} />
        </div >
    )
}