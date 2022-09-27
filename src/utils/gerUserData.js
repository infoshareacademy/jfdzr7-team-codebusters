import { getDoc, doc } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getUserData = (setUserData, uid) => {
    const docRef = doc(db, 'users', uid)
    getDoc(docRef).then(querySnap => {
        setUserData({
            email: querySnap.data().email,
            address: querySnap.data().address,
            telefon: querySnap.data().telefon
        })
    })
}