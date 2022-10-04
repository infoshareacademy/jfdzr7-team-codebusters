import { dateToString } from "../../../../utils/dateToString"
import messageClose from "../../../../img/icons/messageClose.png"
import messageOpen from "../../../../img/icons/messageOpen.png"
import bin from "../../../../img/icons/bin.png"

export const MessageContainer = ({ message }) => {
    console.log(message)
    return (
        <fieldset>
            <legend>{dateToString(message.date)}</legend>
            <p>{message.content}</p>
            <div>
                {message.isRead ?
                    <img src={messageOpen} height='20px' alt='message is read' /> :
                    <img src={messageClose} height='20px' alt='message is unread' />}
                <img src={bin} height='20px' alt='throw out message' />

            </div>
        </fieldset>
    )
}