import { Link } from "react-router-dom"
import { LogoutButton } from "../../auth/LogoutButton"

export const AccountManagmentPanel = ({ className }) => {
    return (
        <div className={className}>
            <Link to='/account'>My account</Link>
            <LogoutButton />
        </div>
    )
}