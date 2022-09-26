import cancel from "./../../../img/icons/cancel.png"
import check from "./../../../img/icons/check.png"
import { cancelStatusChange, confirmStatusChange } from "./../utils/statusChangeHandlers"

export const StatusChangePanelIcons = ({ order, isEditStatusActive, setIsEditStatusActive, orderStatusSelectValue }) => {
    return (
        <>
            <img src={check} height="20px"
                alt="check"
                onClick={event => confirmStatusChange(event, order, orderStatusSelectValue, isEditStatusActive, setIsEditStatusActive)} />
            <img src={cancel} height="20px"
                alt="cancel"
                onClick={event => cancelStatusChange(event, isEditStatusActive, setIsEditStatusActive)} />
        </>
    )
}