import { getDoc, doc } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getUsername = (setUsername, uid) => {
    const docRef = doc(db, 'users', uid)
    getDoc(docRef).then(querySnap => {
        setUsername(querySnap.data().username)
    })
}