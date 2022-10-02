import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import { AccountManagmentPanel } from "./AccountManagmentPanel"
import { LinksPanel } from "./LinksPanel"
import { userAccountMenuLinks, adminAccountMenuLinks } from "../utils/accauntMenuLinksList"
import { StyledAccountMenuPanel } from "./AccountMenuPanel.styled"

export const AccountMenuPanel = () => {
    const { isAdmin } = useContext(AuthContext)
    return (
        <StyledAccountMenuPanel>
            <AccountManagmentPanel />
            <LinksPanel linksList={isAdmin ? adminAccountMenuLinks : userAccountMenuLinks} />
        </StyledAccountMenuPanel>
    )
}