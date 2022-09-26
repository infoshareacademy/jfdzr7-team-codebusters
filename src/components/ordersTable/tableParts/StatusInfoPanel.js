import pencil from "./../../../img/icons/pencil.png"
import { changeEditStatus } from "./../utils/statusChangeHandlers"
import { Wrapper } from "./Wrapper"

export const StatusInfoPanel = ({ status, isEditStatusActive, setIsEditStatusActive }) => {
    return (
        <Wrapper>
            <p>{status}</p>
            <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event, isEditStatusActive, setIsEditStatusActive)} />
        </Wrapper>
    )
}