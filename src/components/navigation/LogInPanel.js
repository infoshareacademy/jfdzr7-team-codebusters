import { StyledNavLink } from "./StyledNavLink"

export const LogInPanel = ({ className }) => {
    return (
        <div className={className}>
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
        </div>
    )
}