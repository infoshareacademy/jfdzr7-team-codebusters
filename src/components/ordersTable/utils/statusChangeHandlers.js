import { doc, updateDoc } from 'firebase/firestore'
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
}

const updateOrderStatus = (orderStatusSelectValue, order, changeStatus) => {
    changeStatus(orderStatusSelectValue)
    const docRef = doc(db, 'orders', order.id)
    const updateStatus = { status: orderStatusSelectValue }
    updateDoc(docRef, updateStatus)
}