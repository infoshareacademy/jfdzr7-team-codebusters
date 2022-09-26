import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getOrderList = ({ setOrderList, checkedOption, orderDate, searchText }) => {
    const collectionRef = collection(db, 'orders')
    getDocs(query(collectionRef,
        where('orderDate', ">=", orderDate.dateStart),
        where('orderDate', "<=", orderDate.dateEnd),
        orderBy('orderDate', 'desc')
    )).then(querySnapshot => {
        const orderList = querySnapshot.docs.map(order => {
            return ({
                ...order.data(),
                orderDate: order.data().orderDate.toDate(),
                id: order.id,
            })
        })
        setOrderList(orderList)
    })
}
