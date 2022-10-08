import { Link } from "react-router-dom"

import { StyledLinksPanel } from "./AccountMenuPanel.styled"

export const LinksPanel = ({ linksList }) => {
    return (
        <StyledLinksPanel>
            {linksList.map(link =>
                <Link key={link.url} to={link.url}>{link.text}</Link>)}
        </StyledLinksPanel>
    )
}