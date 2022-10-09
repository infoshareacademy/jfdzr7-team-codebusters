import { useContext } from "react"

import { logout } from './logout'
import { AuthContext } from "./../../providers/AuthProvider"
import { StyledButton } from "./StyledAuth"

export const LogoutButton = () => {
    const { setUser } = useContext(AuthContext)
    return (
        <StyledButton onClick={() => logout(setUser)}>Log Out</StyledButton>
    )
}