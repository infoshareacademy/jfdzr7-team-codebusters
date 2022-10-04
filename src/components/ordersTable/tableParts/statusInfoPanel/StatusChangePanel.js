import { useState } from "react"

import { Wrapper } from "./Wrapper"
import { SelectInput } from "./SelectInput"
import { StatusChangePanelIcons } from "./StatusChangePanelIcons"

export const StatusChangePanel = ({ order, setIsEditStatusActive }) => {
    const [orderStatusSelectValue, setOrderStatusSelectValue] = useState(order.status)
    return (
        <Wrapper>
            <SelectInput
                name='orderStatus'
                value={orderStatusSelectValue}
                callback={event => setOrderStatusSelectValue(event.target.value)}
                statusOptions={['waiting', 'active', 'sent']}
                onClickCallback={event => event.stopPropagation()
                }
            />
            <StatusChangePanelIcons
                order={order}
                setIsEditStatusActive={setIsEditStatusActive}
                orderStatusSelectValue={orderStatusSelectValue}
            />
        </Wrapper>)
}