import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../api/firebase'
import { getDoc, doc } from 'firebase/firestore'

export const getOrderList = (setOrderList) => {
    const collectionRef = collection(db, 'orders')
    getDocs(collectionRef).then(querySnapshot => {
        let orderList = querySnapshot.docs.map(order => {
            return ({
                ...order.data(),
                orderDate: order.data().orderDate.toDate(),
                id: order.id,
            })
        })
        setOrderList(orderList)
    })
}
