import { useContext } from "react"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"
import { AuthContext } from "../../../../providers/AuthProvider"
import { changeAllIsReadStatus, deleteAllMessages, deleteReadMessages, deleteUnreadMessages } from "./messagesHandlers"
import { StyledButton, StyledMessagesMenagmentPanel } from "./MessagesPage.styled"

export const MessagesMenagmentPanel = () => {
    const { messagesList, setMessagesList } = useContext(MessagesListContext)
    const { user } = useContext(AuthContext)
    return (
        <StyledMessagesMenagmentPanel>
            <StyledButton onClick={() => deleteAllMessages(messagesList, user.id)}>delate all</StyledButton>
            <StyledButton onClick={() => deleteReadMessages(messagesList, user.id)}>delate read</StyledButton>
            <StyledButton onClick={() => deleteUnreadMessages(messagesList, user.id)}>delate unread</StyledButton>
            <StyledButton onClick={() => changeAllIsReadStatus(messagesList, setMessagesList, user.id, false)}>set all messages read</StyledButton>
            <StyledButton onClick={() => changeAllIsReadStatus(messagesList, setMessagesList, user.id, true)}>set all messages unread</StyledButton>
        </StyledMessagesMenagmentPanel>
    )
}