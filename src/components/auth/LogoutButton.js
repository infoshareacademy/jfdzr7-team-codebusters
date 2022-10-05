import { useContext } from "react"

import { logout } from './logout'
import { AuthContext } from "./../../providers/AuthProvider"

export const LogoutButton = () => {
    const { setUser } = useContext(AuthContext)
    return (
        <button onClick={() => logout(setUser)}>Log Out</button>
    )
}