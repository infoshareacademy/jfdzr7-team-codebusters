import { doc, updateDoc, increment, arrayUnion, Timestamp } from 'firebase/firestore'
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
    const docRef = doc(db, 'users', userID)
    const message = {
        isRead: false,
        content: `Your order form ${dateToString(orderDate)} change status on ${orderStatus}`,
        messageDate: Timestamp.now()
    }
    const updateMessages = {
        unreadMessages: increment(1),
        messages: arrayUnion(message)
    }
    updateDoc(docRef, updateMessages)
}