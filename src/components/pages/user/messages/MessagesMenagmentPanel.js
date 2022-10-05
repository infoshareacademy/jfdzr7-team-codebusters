import { useContext } from "react"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"
import { AuthContext } from "../../../../providers/AuthProvider"
import { deleteAllMessages, deleteReadMessages, deleteUnreadMessages } from "./messagesHandlers"

export const MessagesMenagmentPanel = () => {
    const { messagesList } = useContext(MessagesListContext)
    const { user } = useContext(AuthContext)
    return (
        <div>
            <button onClick={() => deleteAllMessages(messagesList, user.id)}>delate all</button>
            <button onClick={() => deleteReadMessages(messagesList, user.id)}>delate read</button>
            <button onClick={() => deleteUnreadMessages(messagesList, user.id)}>delate unread</button>
        </div>
    )
}