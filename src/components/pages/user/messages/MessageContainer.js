import { dateToString } from "../../../../utils/dateToString"
import { IconPanel } from "./IconPanel"
import { StyledMessageContainer } from "./MessagesPage.styled"

export const MessageContainer = ({ message }) => {
    return (
        <StyledMessageContainer isRead={message.isRead}>
            <legend>{dateToString(message.date)}</legend>
            <p>{message.content}</p>
            <IconPanel isRead={message.isRead} messageID={message.id} />
        </StyledMessageContainer>
    )
}