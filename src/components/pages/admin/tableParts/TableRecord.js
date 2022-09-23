import { useState, useEffect } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import pencil from "./../../../../img/icons/pencil.png"
import { Wrapper } from "./Wrapper"
import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"
import { SelectInput } from "./SelectInput"
import { getUsername } from './../../../../utils/getUsername'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from "../../../../api/firebase"
import { dateToString } from "../../../../utils/dateToString"
import { ChangeStatusInput } from "./ChangeStatusInput"
import { StatusInfo } from "./StatusInfo"

export const TableRecord = ({ className, order, index }) => {
    const handleClick = (event) => {
        const detailPanel = event.currentTarget.lastChild
        const detailPanelIsHidden = detailPanel.style.display === 'none'
        detailPanel.style.display = detailPanelIsHidden ? 'block' : 'none'
    }
    console.log(order)
    const [statusInput, setStatusInput] = useState(order.status)
    const [testOrder, setTestOrder] = useState(order)
    console.log(testOrder)
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)

    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }

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
                    <ChangeStatusInput order={order} statusInput={statusInput} isEditStatusActive={isEditStatusActive} setStatusInput={setStatusInput} setIsEditStatusActive={setIsEditStatusActive} /> :
                    <StatusInfo status={statusInput} isEditStatusActive={isEditStatusActive} setIsEditStatusActive={setIsEditStatusActive} />
            }
            <StyledOrderDetail positions={order.positions} />
        </div >
    )
}