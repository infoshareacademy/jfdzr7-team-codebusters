import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { StyledHeader } from "./Header.styled";
import { AuthPanel } from "./AuthPanel";
import { AccountMenu } from "./AccountMenu";
import { Navigation } from "./Navigation";
import ghostbusters from "../../img/ghostbusters.png";
import shoppingCart from "../../img/icons/shopping-cart.png";
import { StyledNavLink } from "./Header.styled";
import { CartContext } from "../../providers/CartProvider";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <StyledHeader>
      <div className="logoContainer">
        <img src={ghostbusters} alt={"logo"} />
        <p>Codebusters</p>
      </div>
      <Navigation />
      {isAuth ? <AccountMenu /> : <AuthPanel />}

      {isAuth ? (
        <StyledNavLink to="/cart">
          <span>
            <img
              src={shoppingCart}
              alt="shopping cart"
              className="shoppingCartIcon"
            />
          </span>
          <span>{cart == undefined ? 0 : cart.length}</span>
        </StyledNavLink>
      ) : null}
    </StyledHeader>
  );
};
