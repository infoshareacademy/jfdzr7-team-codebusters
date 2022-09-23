import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../api/firebase'
import { getDoc, doc } from 'firebase/firestore'

export const getOrderList = ({ setOrderList, checkedOption, orderDate, searchText }) => {
    const collectionRef = collection(db, 'orders')
    getDocs(query(collectionRef,
        where('orderDate', "<=", orderDate.dateEnd),
        where('orderDate', ">=", orderDate.dateStart),
    )).then(querySnapshot => {
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
