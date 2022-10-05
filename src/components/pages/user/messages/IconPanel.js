import { useContext } from "react"
import { StyledIconPanel } from "./MessagesPage.styled"
import { changeIsReadStatus, deleteMessage } from "./messagesHandlers"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"
import { AuthContext } from "../../../../providers/AuthProvider"


import messageClose from "../../../../img/icons/messageClose.png"
import messageOpen from "../../../../img/icons/messageOpen.png"
import bin from "../../../../img/icons/bin.png"

export const IconPanel = ({ isRead, messageID }) => {
    const { setMessagesList } = useContext(MessagesListContext)
    const { user } = useContext(AuthContext)
    return (
        <StyledIconPanel>
            {isRead ?
                <img src={messageOpen} alt='message is read'
                    onClick={() => { changeIsReadStatus(setMessagesList, messageID, true) }} /> :
                <img src={messageClose} alt='message is unread'
                    onClick={() => { changeIsReadStatus(setMessagesList, messageID, false) }} />}
            <img src={bin} alt='throw out message'
                onClick={() => deleteMessage(messageID, user.id, isRead)} />
        </StyledIconPanel>
    )
}