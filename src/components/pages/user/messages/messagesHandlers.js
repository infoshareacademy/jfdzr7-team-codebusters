import { doc, deleteDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../../../api/firebase"

export const deleteMessage = (messageID, userID, isRead) => {
    if (!isRead) {
        console.log(userID)
        const userDocRef = doc(db, 'users', userID)
        const updateUnreadMessagesCount = {
            unreadMessages: increment(-1),
        }
        updateDoc(userDocRef, updateUnreadMessagesCount)
    }
    const messageDocRef = doc(db, 'messages', messageID)
    deleteDoc(messageDocRef)
}

export const changeIsReadStatus = (setMessagesList, messageID, isRead) => {
    const messageDocRef = doc(db, 'messages', messageID)
    const messageIsReadStatusChange = {
        isRead: !isRead
    }
    updateDoc(messageDocRef, messageIsReadStatusChange)
    setMessagesList(prevStateArray =>
        prevStateArray.map(message =>
            message.id === messageID ?
                {
                    ...message,
                    isRead: !message.isRead
                } :
                message
        )
    )
}

const selectUnreadMessagesID = (messagesList) => {
    return messagesList.filter(message => message.isRead === false).map(message => message.id)
}

const selectReadMessagesID = (messagesList) => {
    return messagesList.filter(message => message.isRead === true).map(message => message.id)
}

const selectAllMessagesID = (messagesList) => {
    return messagesList.map(message => message.id)
}

export const deleteReadMessages = (messagesList, userID) => {
    const selectedReadMessagesID = selectReadMessagesID(messagesList)
    selectedReadMessagesID.map(messageID => deleteMessage(messageID, userID, true))
}

export const deleteUnreadMessages = (messagesList, userID) => {
    const selectedUnreadMessagesID = selectUnreadMessagesID(messagesList)
    selectedUnreadMessagesID.map(messageID => deleteMessage(messageID, userID, false))
}

export const deleteAllMessages = (messagesList, userID) => {
    const selectedAllMessagesID = selectAllMessagesID(messagesList)
    selectedAllMessagesID.map(messageID => deleteMessage(messageID, userID))
}
