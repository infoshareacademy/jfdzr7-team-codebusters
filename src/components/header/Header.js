import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { StyledHeader } from "./Header.styled"
import { AuthPanel } from "./AuthPanel"
import { AccountMenu } from "./AccountMenu"
import { Navigation } from "./Navigation"
import ghostbusters from "../../img/ghostbusters.png"
import shoppingCart from "../../img/icons/shopping-cart.png"

export const Header = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <StyledHeader>
            <div className="logoContainer">
                <img src={ghostbusters} alt={"logo"} />
                <p>Codebusters</p>
            </div>
            <Navigation />
            {isAuth ?
                <AccountMenu /> :
                <AuthPanel />}
            <img src={shoppingCart} alt='shopping cart' className='shoppingCartIcon' />
        </StyledHeader>
    )
}