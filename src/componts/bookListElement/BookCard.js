import { StyledCover } from "./bookCardPartComponents/StyledCover"
import { StyledInfoPanel } from "./bookCardPartComponents/StyledInfoPanel"
import { StyledCartPanel } from "./bookCardPartComponents/StyledCartPanel"
import { StyledArticle } from "./bookCardPartComponents/StyledArticle"

export const BookCard = ({ id, className, title, author, price, cover, quantity }) => {
    return (
        <StyledArticle className={className} isDisable={quantity === 0}>
            <StyledCover cover={cover} />
            <StyledInfoPanel title={title} author={author} price={price} />
            <StyledCartPanel quantity={quantity} id={id} />
        </StyledArticle >
    )
}