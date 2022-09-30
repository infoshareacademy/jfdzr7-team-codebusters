import { StyledCover } from "./bookCardPartComponents/StyledCover"
import { StyledInfoPanel } from "./bookCardPartComponents/StyledInfoPanel"
import { StyledCartPanel } from "./bookCardPartComponents/StyledCartPanel"
import { StyledArticle } from "./bookCardPartComponents/StyledArticle"

export const BookCard = ({ className, title, author, price, cover, quantity }) => {
    const checkIfQuantityIsEqualZero = quantity => quantity === 0
    return (
        <StyledArticle className={className} isDisable={checkIfQuantityIsEqualZero(quantity)}>
            <StyledCover cover={cover} />
            <StyledInfoPanel title={title} author={author} price={price} />
            <StyledCartPanel quantity={quantity} />
        </StyledArticle >
    )
}