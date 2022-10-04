import { useContext } from "react"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"
import { MessageContainer } from "./MessageContainer"
import { StyledMessagesListElement } from "./MessagesPage.styled"

export const MessagesListElement = () => {
    const { messagesList } = useContext(MessagesListContext)
    return (
        <StyledMessagesListElement>
            {
                messagesList.map(message => <MessageContainer key={message.date} message={message} />)
            }
        </StyledMessagesListElement>
    )
}