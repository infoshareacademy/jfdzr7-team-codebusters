import { getDoc, doc } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getBookDetails = (setBookDetails, id) => {
    const docRef = doc(db, 'books', id)
    getDoc(docRef).then(querySnap => {
        setBookDetails({
            author: querySnap.data().author,
            title: querySnap.data().title,
            price: querySnap.data().price
        })
    })
}