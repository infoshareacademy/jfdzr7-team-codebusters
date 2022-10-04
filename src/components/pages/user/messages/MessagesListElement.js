import { useContext } from "react"
import { MessagesListContext } from "../../../../providers/MessagesListProvider"
import { MessageContainer } from "./MessageContainer"

export const MessagesListElement = () => {
    const { messagesList } = useContext(MessagesListContext)
    console.log(messagesList)
    return (
        <section>
            {
                messagesList.map(message => <MessageContainer key={message.date} message={message} />)
            }
        </section>
    )
}