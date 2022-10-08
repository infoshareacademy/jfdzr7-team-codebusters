import { createContext, useState } from "react";

export const MessagesListContext = createContext([])

export const MessagesListProvider = ({ children }) => {
    const [messagesList, setMessagesList] = useState([])
    return (
        <MessagesListContext.Provider value={{
            messagesList, setMessagesList
        }}>
            {children}
        </MessagesListContext.Provider>
    )
}