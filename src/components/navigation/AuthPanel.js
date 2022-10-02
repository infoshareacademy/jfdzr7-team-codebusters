import { StyledNavLink } from "./StyledNavLink"

export const AuthPanel = ({ className }) => {
    return (
        <div className={className}>
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
        </div>
    )
}