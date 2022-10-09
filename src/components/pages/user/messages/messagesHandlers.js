import { doc, deleteDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../../../api/firebase"

export const deleteMessage = (setMessagesList, messageID, userID, isRead) => {
    if (!isRead) {
        changeUnreadMessagesCount(userID, isRead)
    }
    const messageDocRef = doc(db, 'messages', messageID)
    deleteDoc(messageDocRef)
    deleteLocalMessage(setMessagesList, messageID)
}

const deleteLocalMessage = (setMessagesList, messageID) => {
    setMessagesList(prevMessagesList =>
        prevMessagesList.filter(message => message.id !== messageID))
}

export const changeIsReadStatus = (setMessagesList, messageID, userID, isRead) => {
    const messageDocRef = doc(db, 'messages', messageID)
    const messageIsReadStatusChange = {
        isRead: !isRead
    }
    updateDoc(messageDocRef, messageIsReadStatusChange)
    changeUnreadMessagesCount(userID, isRead)

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

export const changeAllIsReadStatus = (messagesList, setMessagesList, userID, isRead) => {
    const selectedMessages = selectIsReadMessagesID(messagesList, isRead)
    selectedMessages.forEach(messageID => changeIsReadStatus(setMessagesList, messageID, userID, isRead))
}

export const deleteReadMessages = (messagesList, setMessagesList, userID) => {
    const selectedReadMessagesID = selectIsReadMessagesID(messagesList, true)
    selectedReadMessagesID.forEach(messageID => deleteMessage(setMessagesList, messageID, userID, true)
    )
}

export const deleteUnreadMessages = (messagesList, setMessagesList, userID) => {
    const selectedUnreadMessagesID = selectIsReadMessagesID(messagesList, false)
    selectedUnreadMessagesID.forEach(messageID => deleteMessage(setMessagesList, messageID, userID, false))
}

export const deleteAllMessages = (messagesList, setMessagesList, userID) => {
    const selectedAllMessagesID = selectAllMessagesID(messagesList)
    selectedAllMessagesID.forEach(messageID => deleteMessage(setMessagesList, messageID, userID))
}

const changeUnreadMessagesCount = (userID, isRead) => {
    const userDocRef = doc(db, 'users', userID)
    const updateUnreadMessagesCount = {
        unreadMessages: increment(isRead ? 1 : -1),
    }
    updateDoc(userDocRef, updateUnreadMessagesCount)
}

const selectIsReadMessagesID = (messagesList, isRead) => {
    return messagesList.filter(message => message.isRead === isRead).map(message => message.id)
}

const selectAllMessagesID = (messagesList) => {
    return messagesList.map(message => message.id)
}
