import { getAuth, signOut } from "firebase/auth";

export const logout = (setUser) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        setUser(null)
    })
}