import { doc, addDoc, updateDoc, increment, Timestamp, collection } from 'firebase/firestore'
import { dateToString } from '../../../utils/dateToString'
import { db } from "./../../../api/firebase"

export const changeEditStatus = (event, setIsEditStatusActive) => {
    setIsEditStatusActive(prevState => !prevState)
    event.stopPropagation()
}

export const cancelStatusChange = (event, setIsEditStatusActive) => {
    changeEditStatus(event, setIsEditStatusActive)
}

export const confirmStatusChange = (event, orderStatusSelectValue, setIsEditStatusActive, order, changeStatus) => {
    changeEditStatus(event, setIsEditStatusActive, changeStatus)
    order.status !== orderStatusSelectValue && updateOrderStatus(orderStatusSelectValue, order, changeStatus)
    sendMessageToUser(order.user.userID, order.orderDate, orderStatusSelectValue)
}

const updateOrderStatus = (orderStatusSelectValue, order, changeStatus) => {
    changeStatus(orderStatusSelectValue)
    const docRef = doc(db, 'orders', order.id)
    const updateStatus = { status: orderStatusSelectValue }
    updateDoc(docRef, updateStatus)
}

export const sendMessageToUser = (userID, orderDate, orderStatus) => {
    const userDocRef = doc(db, 'users', userID)
    const messageCollectionRef = collection(db, 'messages')
    const message = {
        isRead: false,
        content: `Your order form ${dateToString(orderDate)} change status on ${orderStatus}`,
        date: Timestamp.now(),
        userID: userID
    }
    const updateUnreadMessagesCount = {
        unreadMessages: increment(1),
    }
    addDoc(messageCollectionRef, message)
    updateDoc(userDocRef, updateUnreadMessagesCount)
}