import { useState } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import pencil from "./../../../../img/icons/pencil.png"
import { Wrapper } from "./Wrapper"
import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"
import { SelectInput } from "./SelectInput"

export const TableRecord = ({ className, order, index }) => {
    const handleClick = (event) => {
        const detailPanel = event.currentTarget.lastChild
        const detailPanelIsHidden = detailPanel.style.display === 'none'
        detailPanel.style.display = detailPanelIsHidden ? 'block' : 'none'
    }
    const [isEditStatusActive, setIsEditStatusActive] = useState(false)
    const [orderStatus, setOrderStatus] = useState(order.status)
    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }
    const cancelStatusChange = (event) => {
        setOrderStatus(order.status)
        changeEditStatus(event)
    }
    const confirmStatusChange = (event) => {
        changeEditStatus(event)
    }
    return (
        <div className={className} onClick={event => handleClick(event)} >
            <p onClick={event => handleClick(event)}>{index + 1}</p>
            <p>{order.orderDate.getDate() + '-' + order.orderDate.getMonth() + '-' + order.orderDate.getFullYear()}</p>
            <p>{order.userID}</p>
            <p>{order.orderValue}</p>
            {
                isEditStatusActive ?
                    <Wrapper>
                        <SelectInput labelText=''
                            name='orderStatus'
                            value={orderStatus}
                            callback={event => setOrderStatus(event.target.value)}
                            statusOptions={['waiting', 'active', 'sent']}
                            onClickCallback={event => event.stopPropagation()}
                        />
                        <img src={check} height="20px" alt="check" onClick={event => confirmStatusChange(event)} />
                        <img src={cancel} height="20px" alt="cancel" onClick={event => cancelStatusChange(event)} />
                    </Wrapper> :
                    <Wrapper>
                        <p>{orderStatus}</p>
                        <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event)} />
                    </Wrapper>
            }
            <StyledOrderDetail />
        </div >
    )
}