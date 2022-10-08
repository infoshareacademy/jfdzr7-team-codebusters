import { AccountMenuPanel } from "./accountMenuComponents/AccountMenuPanel"
import { StyledAccountMenu } from "./Header.styled"
import { AuthContext } from "../../providers/AuthProvider";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { findCart } from "../../utils/cartdbHandlers";

export const AccountMenu = () => {
  const { cart, cartId, setCart, setCartId } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (findCart(user, setCart, setCartId) !== [])
      findCart(user, setCart, setCartId);
  }, [user]);

  return (
    <StyledAccountMenu>
      <p>Account</p>
      <AccountMenuPanel />
    </StyledAccountMenu>
  );
};