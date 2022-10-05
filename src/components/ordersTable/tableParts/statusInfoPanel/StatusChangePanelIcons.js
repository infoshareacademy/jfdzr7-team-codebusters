import { cancelStatusChange, confirmStatusChange } from "../../utils/statusChangeHandlers"

import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"

export const StatusChangePanelIcons = ({ setIsEditStatusActive, orderStatusSelectValue, order, changeStatus }) => {
    return (
        <>
            <img src={check} height="20px"
                alt="check"
                onClick={event => confirmStatusChange(event, orderStatusSelectValue, setIsEditStatusActive, order, changeStatus)} />
            <img src={cancel} height="20px"
                alt="cancel"
                onClick={event => cancelStatusChange(event, setIsEditStatusActive)} />
        </>
    )
}