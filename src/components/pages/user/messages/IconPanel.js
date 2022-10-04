import { StyledIconPanel } from "./MessagesPage.styled"

import messageClose from "../../../../img/icons/messageClose.png"
import messageOpen from "../../../../img/icons/messageOpen.png"
import bin from "../../../../img/icons/bin.png"
import { deleteMessage } from "./messagesHandlers"
import { useContext } from "react"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"

export const IconPanel = ({ isRead, messageID }) => {
    // setMessagesList, checkedOption, userID
    const { messagesList, setMessagesList } = useContext(MessagesListContext)
    console.log(messagesList)
    return (
        <StyledIconPanel>
            {isRead ?
                <img src={messageOpen} alt='message is read' /> :
                <img src={messageClose} alt='message is unread' />}
            <img src={bin} alt='throw out message'
                onClick={() => deleteMessage(messageID, setMessagesList)} />
        </StyledIconPanel>
    )
}