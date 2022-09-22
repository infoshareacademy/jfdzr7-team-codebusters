import { logout } from './logout'
import { useContext } from "react"
import { AuthContext } from "./../../providers/AuthProvider"

export const LogoutButton = () => {
    const { setUser } = useContext(AuthContext)
    return (
        <button onClick={() => logout(setUser)}>Log Out</button>
    )
}