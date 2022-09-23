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

export const ChangeStatusInput = ({ statusInput, setStatusInput, order, status, isEditStatusActive, setIsEditStatusActive }) => {
    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }

    const cancelStatusChange = (event) => {
        setStatusInput(order.status)
        changeEditStatus(event)
    }
    const confirmStatusChange = (event) => {
        changeEditStatus(event)
        const docRef = doc(db, 'orders', order.id)
        const newObj = { ...order, status: statusInput }
        updateDoc(docRef, newObj)
    }
    return (
        <Wrapper>
            <SelectInput labelText=''
                name='orderStatus'
                value={statusInput}
                callback={event => setStatusInput(event.target.value)}
                statusOptions={['waiting', 'active', 'sent']}
                onClickCallback={event => event.stopPropagation()}
            />
            <img src={check} height="20px" alt="check" onClick={event => confirmStatusChange(event)} />
            <img src={cancel} height="20px" alt="cancel" onClick={event => cancelStatusChange(event)} />
        </Wrapper>)
}