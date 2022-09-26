import pencil from "./../../../img/icons/pencil.png"
import { Wrapper } from "./Wrapper"

export const StatusInfoPanel = ({ status, isEditStatusActive, setIsEditStatusActive }) => {
    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }
    return (
        <Wrapper>
            <p>{status}</p>
            <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event)} />
        </Wrapper>
    )
}