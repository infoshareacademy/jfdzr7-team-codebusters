import { useContext, createContext, useEffect, useState } from "react"
import { MessagesListContext } from "./MessagesListProvider"
import { getMessagesList } from "../utils/getMessages"
import { AuthContext } from "./AuthProvider"

export const MessagesSearchContext = createContext({})

export const MessagesSearchProvider = ({ children }) => {
    const [searchConditions, setSearchConditions] = useState({
        checkedOption: 'all'
    })
    const { setMessagesList } = useContext(MessagesListContext)
    const { user } = useContext(AuthContext)
    const userID = user.id
    useEffect(() => {
        getMessagesList({ setMessagesList, ...searchConditions, userID })
    }, [setMessagesList, searchConditions, userID])
    return (
        <MessagesSearchContext.Provider value={{ searchConditions, setSearchConditions }}>
            {children}
        </MessagesSearchContext.Provider>
    )
}