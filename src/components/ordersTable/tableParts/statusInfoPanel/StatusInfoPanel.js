import { useContext } from "react"

import { AuthContext } from "../../../../providers/AuthProvider"
import { changeEditStatus } from "./../../utils/statusChangeHandlers"
import { Wrapper } from "./Wrapper"

import pencil from "./../../../../img/icons/pencil.png"

export const StatusInfoPanel = ({ status, setIsEditStatusActive }) => {
    const { isAdmin } = useContext(AuthContext)
    return (
        <Wrapper>
            <p>{status}</p>
            {isAdmin && <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event, setIsEditStatusActive)} />}
        </Wrapper>
    )
}