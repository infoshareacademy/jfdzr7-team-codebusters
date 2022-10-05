import { StyledNavigation, StyledNavLink } from "./Header.styled"

export const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/about">About us</StyledNavLink>
            <StyledNavLink to="/books">Books</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
        </StyledNavigation>
    )
}