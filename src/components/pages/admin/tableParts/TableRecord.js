import { useState, useEffect } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import { getUsername } from './../../../../utils/getUsername'
import { dateToString } from "../../../../utils/dateToString"
import { StatusChangePanel } from "./StatusChangePanel"
import { StatusInfoPanel } from "./StatusInfoPanel"

export const TableRecord = ({ className, order, index }) => {
    const handleClick = (event) => {
        const detailPanel = event.currentTarget.lastChild
        const detailPanelIsHidden = detailPanel.style.display === 'none'
        detailPanel.style.display = detailPanelIsHidden ? 'block' : 'none'
    }
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)

    const [username, setUsername] = useState('')

    useEffect(() => {
        getUsername(setUsername, order.userID)
    }, [order.userID])

    return (
        <div className={className} onClick={event => handleClick(event)} >
            <p>{index + 1}</p>
            <p>{dateToString(order.orderDate)}</p>
            <p>{username}</p>
            <p>{order.orderValue}</p>
            {
                isEditStatusActive ?
                    <StatusChangePanel order={order} isEditStatusActive={isEditStatusActive} setIsEditStatusActive={setIsEditStatusActive} /> :
                    <StatusInfoPanel status={order.status} isEditStatusActive={isEditStatusActive} setIsEditStatusActive={setIsEditStatusActive} />
            }
            <StyledOrderDetail positions={order.positions} />
        </div >
    )
}