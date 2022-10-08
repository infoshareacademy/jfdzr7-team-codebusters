import { StyledCover } from "./bookCardPartComponents/StyledCover";
import { StyledInfoPanel } from "./bookCardPartComponents/StyledInfoPanel";
import { StyledCartPanel } from "./bookCardPartComponents/StyledCartPanel";
import { StyledArticle } from "./bookCardPartComponents/StyledArticle";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

export const BookCard = ({
  className,
  id,
  title,
  author,
  price,
  cover,
  quantity,
}) => {
  const book = { id, title, author, price, cover, quantity };
  const { isAuth } = useContext(AuthContext);
  const checkIfQuantityIsEqualZero = (quantity) => quantity === 0;
  return (
    <StyledArticle
      className={className}
      isDisable={checkIfQuantityIsEqualZero(quantity)}
    >
      <StyledCover cover={cover} />
      <StyledInfoPanel title={title} author={author} price={price} />
      {isAuth && <StyledCartPanel quantity={quantity} book={book} />}
    </StyledArticle>
  );
};
