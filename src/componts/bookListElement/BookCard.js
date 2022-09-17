import { StyledCover } from "./bookCardPartComponents/StyledCover"
import { StyledInfoPanel } from "./bookCardPartComponents/StyledInfoPanel"
import { StyledCartPanel } from "./bookCardPartComponents/StyledCartPanel"
import { StyledArticle } from "./bookCardPartComponents/StyledArticle"

export const BookCard = ({ className, title, author, price, cover, quantity }) => {
    return (
        <StyledArticle className={className} isDisable={quantity === 0}>
            <StyledCover cover={cover} />
            <StyledInfoPanel title={title} author={title} price={price} />
            <StyledCartPanel quantity={quantity} />
        </StyledArticle >
    )
}