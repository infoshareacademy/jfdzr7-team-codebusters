import { createContext, useState } from "react";

export const AuthContext = createContext([])

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isAdmin: false
    })
    const isAuth = !!user
    const isAdmin = user?.isAdmin
    const isUser = isAuth && !user?.isAdmin
    return (
        <AuthContext.Provider value={{
            user, setUser,
            isAuth, isAdmin, isUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}