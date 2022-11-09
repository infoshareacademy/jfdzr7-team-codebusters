import { useContext } from "react";

import { Cover } from "./bookCardPartComponents/Cover"
import { InfoPanel } from "./bookCardPartComponents/InfoPanel"
import { CartPanel } from "./bookCardPartComponents/CartPanel"
import { StyledArticle } from "./BooksListElement.styled"
import { AuthContext } from "../../providers/AuthProvider";

export const BookCard = ({ title, author, price, cover, quantity, book, id }) => {

    const checkIfQuantityIsEqualZero = quantity => quantity === 0
    const { isAuth } = useContext(AuthContext);
    return (
        <StyledArticle isDisable={checkIfQuantityIsEqualZero(quantity)}>
            <Cover cover={cover} />
            <InfoPanel title={title} author={author} price={price} />
            {isAuth && <CartPanel id={id} quantity={quantity} book={book} />}
        </StyledArticle >
    )
}