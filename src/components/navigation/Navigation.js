import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import ghostbusters from "../../img/ghostbusters.png"
import { StyledHeader } from "./StyledHeader"
import { StyledNavigation } from "./StyledNavigation"
import { StyledNavLink } from "./StyledNavLink"

export const Navigation = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <StyledHeader>
            <div className="logoContainer">
                <img src={ghostbusters} alt={"logo"} />
                <h1>Ghostbusters</h1>
            </div>
            <StyledNavigation>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/about">About us</StyledNavLink>
                <StyledNavLink to="/books">Books</StyledNavLink>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
            </StyledNavigation>
            {isAuth ?
                <div className="AccountMenu">
                    <p>Account</p>
                </div> :
                <div className="loginPanel">
                    <StyledNavLink to="/login">Log In</StyledNavLink>
                    <StyledNavLink to="/register">Register</StyledNavLink>
                </div>}

        </StyledHeader>
    )
}