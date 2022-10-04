import { changeEditStatus } from "./../../utils/statusChangeHandlers"
import { Wrapper } from "./Wrapper"

import pencil from "./../../../../img/icons/pencil.png"

export const StatusInfoPanel = ({ status, setIsEditStatusActive }) => {
    return (
        <Wrapper>
            <p>{status}</p>
            <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event, setIsEditStatusActive)} />
        </Wrapper>
    )
}