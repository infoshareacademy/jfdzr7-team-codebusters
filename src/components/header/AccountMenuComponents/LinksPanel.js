import { Link } from "react-router-dom"
import { StyledLinksPanel } from "./AccountMenuPanel.styled"

export const LinksPanel = ({ linksList }) => {
    return (
        <StyledLinksPanel>
            {linksList.map((link, index) =>
                <Link key={index} to={link.url}>{link.text}</Link>)}
        </StyledLinksPanel>
    )
}