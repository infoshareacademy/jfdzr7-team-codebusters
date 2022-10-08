import { StyledInfoPanel } from "./BookCardPartComponents.styled"

export const InfoPanel = ({ title, author, price }) => {
    return (
        <StyledInfoPanel>
            <h3>{title}</h3>
            <p>by {author}</p>
            <p className="price">{price}</p>
        </StyledInfoPanel>
    )
}