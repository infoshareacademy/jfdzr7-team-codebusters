import { doc, updateDoc } from 'firebase/firestore'
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
}

const updateOrderStatus = (order, orderStatusSelectValue) => {
    order.status = orderStatusSelectValue
    const docRef = doc(db, 'orders', order.id)
    const updateStatus = { status: orderStatusSelectValue }
    updateDoc(docRef, updateStatus)
}