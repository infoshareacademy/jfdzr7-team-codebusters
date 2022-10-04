import { doc, addDoc, updateDoc, increment, Timestamp, collection } from 'firebase/firestore'
import { dateToString } from '../../../utils/dateToString'
import { db } from "./../../../api/firebase"

export const changeEditStatus = (event, isEditStatusActive, setIsEditStatusActive) => {
    setIsEditStatusActive(!isEditStatusActive)
    event.stopPropagation()
}

export const cancelStatusChange = (event, isEditStatusActive, setIsEditStatusActive) => {
    changeEditStatus(event, isEditStatusActive, setIsEditStatusActive)
}

export const confirmStatusChange = (event, order, orderStatusSelectValue, isEditStatusActive, setIsEditStatusActive) => {
    changeEditStatus(event, isEditStatusActive, setIsEditStatusActive)
    updateOrderStatus(order, orderStatusSelectValue)
    sendMessageToUser(order.user.ID, order.orderDate, orderStatusSelectValue)
}

const updateOrderStatus = (order, orderStatusSelectValue) => {
    order.status = orderStatusSelectValue
    const docRef = doc(db, 'orders', order.id)
    const updateStatus = { status: orderStatusSelectValue }
    updateDoc(docRef, updateStatus)
}

const sendMessageToUser = (userID, orderDate, orderStatus) => {
    const userDocRef = doc(db, 'users', userID)
    const messageCollectionRef = collection(db, 'messages')
    const message = {
        isRead: false,
        content: `Your order form ${dateToString(orderDate)} change status on ${orderStatus}`,
        messageDate: Timestamp.now(),
        userID: userID
    }
    const updateUnreadMessagesCount = {
        unreadMessages: increment(1),
    }
    addDoc(messageCollectionRef, message)
    updateDoc(userDocRef, updateUnreadMessagesCount)
}