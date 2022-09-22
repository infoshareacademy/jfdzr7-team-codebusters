import { Link } from "react-router-dom"

export const AccountManagmentPanel = ({ className }) => {
    return (
        <div className={className}>
            <Link to='/account'>My account</Link>
            <button>Log Out</button>
        </div>
    )
}