import { doc, getDoc } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getMessagesList = ({ setMessagesList, checkedOption, userID }) => {
    const collectionRef = doc(db, 'messages', userID)
    getDoc(collectionRef).then(querySnapshot => {
        let messagesList = querySnapshot.data().messages
        setMessagesList(messagesList.map(message => ({
            ...message,
            date: message.date.toDate()
        })))
    })
}