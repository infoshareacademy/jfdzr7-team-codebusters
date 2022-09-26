import { useState } from "react"
import { Wrapper } from "./Wrapper"
import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"
import { SelectInput } from "./SelectInput"
import { doc, updateDoc } from 'firebase/firestore'
import { db } from "../../../../api/firebase"

export const StatusChangePanel = ({ order, isEditStatusActive, setIsEditStatusActive }) => {
    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }

    const cancelStatusChange = (event) => {
        changeEditStatus(event)
    }

    const confirmStatusChange = (order, event) => {
        changeEditStatus(event)
        order.status = statusInput
        const docRef = doc(db, 'orders', order.id)
        const newObj = { ...order, status: statusInput }
        updateDoc(docRef, newObj)
    }
    const [statusInput, setStatusInput] = useState(order.status)
    return (
        <Wrapper>
            <SelectInput labelText=''
                name='orderStatus'
                value={statusInput}
                callback={event => setStatusInput(event.target.value)}
                statusOptions={['waiting', 'active', 'sent']}
                onClickCallback={event => event.stopPropagation()}
            />
            <img src={check} height="20px" alt="check" onClick={event => confirmStatusChange(order, event)} />
            <img src={cancel} height="20px" alt="cancel" onClick={event => cancelStatusChange(event)} />
        </Wrapper>)
}