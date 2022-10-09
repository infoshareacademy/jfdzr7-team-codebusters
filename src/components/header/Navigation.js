import { StyledNavigation, StyledNavLink } from "./Header.styled"

export const Navigation = () => {
    return (
        <StyledNavigation>
            <StyledNavLink end to="/">Home</StyledNavLink>
            <StyledNavLink to="/books">Books</StyledNavLink>
            <StyledNavLink to="/contact">Contact</StyledNavLink>
        </StyledNavigation>
    )
}