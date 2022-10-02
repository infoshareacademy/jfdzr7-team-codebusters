import { useState, useEffect } from "react";
import { StyledCartItem, StyledButton, StyledBookCover } from "./Cart.styled";
import { getCover } from "../../utils/getCover";

export const CartItem = ({
  id,
  author,
  count,
  cover,
  price,
  quantity,
  title,
  handleRemoveFromCart,
}) => {
  const [coverURL, setCoverURL] = useState("");
  useEffect(() => {
    getCover({ cover, setCoverURL });
  }, [cover]);
  return (
    <StyledCartItem>
      <StyledBookCover src={coverURL} alt="cover" />
      <div>
        {title}
        {count > 1 && <span>{count}x</span>}
      </div>
      <div>{price}</div>
      <div>{price * count}</div>
      <StyledButton onClick={(e) => handleRemoveFromCart(e, id)}>
        Remove
      </StyledButton>
    </StyledCartItem>
  );
};
