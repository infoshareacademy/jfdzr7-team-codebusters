import { Cover } from "./bookCardPartComponents/Cover"
import { InfoPanel } from "./bookCardPartComponents/InfoPanel"
import { CartPanel } from "./bookCardPartComponents/CartPanel"
import { StyledArticle } from "./BooksListElement.styled"

export const BookCard = ({ title, author, price, cover, quantity }) => {
    const checkIfQuantityIsEqualZero = quantity => quantity === 0
    return (
        <StyledArticle isDisable={checkIfQuantityIsEqualZero(quantity)}>
            <Cover cover={cover} />
            <InfoPanel title={title} author={author} price={price} />
            <CartPanel quantity={quantity} />
        </StyledArticle >
    )
}