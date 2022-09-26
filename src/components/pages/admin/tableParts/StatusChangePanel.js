import { useState } from "react"
import { Wrapper } from "./Wrapper"
import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"
import { SelectInput } from "./SelectInput"
import { cancelStatusChange, confirmStatusChange } from "./statusChangeHandlers"


export const StatusChangePanel = ({ order, isEditStatusActive, setIsEditStatusActive }) => {
    const [orderStatusSelectValue, setOrderStatusSelectValue] = useState(order.status)
    return (
        <Wrapper>
            <SelectInput labelText=''
                name='orderStatus'
                value={orderStatusSelectValue}
                callback={event => setOrderStatusSelectValue(event.target.value)}
                statusOptions={['waiting', 'active', 'sent']}
                onClickCallback={event => event.stopPropagation()}
            />
            <img src={check} height="20px"
                alt="check"
                onClick={event => confirmStatusChange(event, order, orderStatusSelectValue, isEditStatusActive, setIsEditStatusActive)} />
            <img src={cancel} height="20px"
                alt="cancel"
                onClick={event => cancelStatusChange(event, isEditStatusActive, setIsEditStatusActive)} />
        </Wrapper>)
}