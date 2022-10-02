import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import { StyledAccountManagmentPanel } from "./StyledAccountManagmentPanel"
import { StyledLinksPanel } from "./StyledLinksPanel"
import { userAccountMenuLinks, adminAccountMenuLinks } from "../utils/accauntMenuLinksList"

export const AccountMenuPanel = ({ className }) => {
    const { isAdmin } = useContext(AuthContext)
    return (
        <div className={className}>
            <StyledAccountManagmentPanel />
            <StyledLinksPanel linksList={isAdmin ? adminAccountMenuLinks : userAccountMenuLinks} />
        </div>
    )
}