import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getOrderList = ({ setOrderList, checkedOption, orderDate, searchText }) => {
    const filterUser = (searchText, ordersList) => {
        return (ordersList.filter(order => {
            return order.user.email.includes(searchText)
        }))
    }
    const collectionRef = collection(db, 'orders')
    const searchConditions = checkedOption === 'all' ?
        query(collectionRef,
            where('orderDate', ">=", orderDate.dateStart),
            where('orderDate', "<=", orderDate.dateEnd),
            orderBy('orderDate', 'desc')
        ) :
        query(collectionRef,
            where('orderDate', ">=", orderDate.dateStart),
            where('orderDate', "<=", orderDate.dateEnd),
            where('status', '==', checkedOption),
            orderBy('orderDate', 'desc')
        )
    getDocs(searchConditions).then(querySnapshot => {
        let orderList = querySnapshot.docs.map(order => {
            return ({
                ...order.data(),
                orderDate: order.data().orderDate.toDate(),
                id: order.id,
            })
        })
        if (searchText) {
            orderList = filterUser(searchText, orderList)
        }
        setOrderList(orderList)
    })
}
