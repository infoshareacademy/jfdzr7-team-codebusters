import { Link } from "react-router-dom"
import { LogoutButton } from "../../auth/LogoutButton"
import { StyledAccountManagmentPanel } from "./AccountMenuPanel.styled"

export const AccountManagmentPanel = () => {
    return (
        <StyledAccountManagmentPanel>
            <Link to='/account'>My account</Link>
            <LogoutButton />
        </StyledAccountManagmentPanel>
    )
}