import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import ghostbusters from "../../img/ghostbusters.png"
import shoppingCart from "../../img/icons/shopping-cart.png"
import { StyledHeader } from "./StyledHeader"
import { StyledNavigation } from "./StyledNavigation"
import { StyledNavLink } from "./StyledNavLink"
import { AuthPanel } from "./AuthPanel"
import { StyledAccountMenu } from "./StyledAccountMenu"

export const Navigation = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <StyledHeader>
            <div className="logoContainer">
                <img src={ghostbusters} alt={"logo"} />
                <p>Codebusters</p>
            </div>
            <StyledNavigation>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/about">About us</StyledNavLink>
                <StyledNavLink to="/books">Books</StyledNavLink>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
            </StyledNavigation>
            {isAuth ?
                <StyledAccountMenu /> :
                <AuthPanel />}
            <img height="30px" src={shoppingCart} alt='shopping cart' className='shoppingCartIcon' />
        </StyledHeader>
    )
}