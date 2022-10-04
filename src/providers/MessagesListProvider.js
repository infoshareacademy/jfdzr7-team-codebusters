import { createContext, useState } from "react";

export const MessagesListContext = createContext([])

export const MessagesListProvider = ({ children }) => {
    const [messagesList, setMessagesList] = useState([])
    console.log('prov')
    console.log(messagesList)
    return (
        <MessagesListContext.Provider value={{
            messagesList, setMessagesList
        }}>
            {children}
        </MessagesListContext.Provider>
    )
}