import { collection, getDocs, where, query, orderBy } from 'firebase/firestore'
import { db } from '../api/firebase'

export const getMessagesList = ({ setMessagesList, checkedOption, userID }) => {
    const collectionRef = collection(db, 'messages')
    const allMessageQuery = query(collectionRef, orderBy('date', 'desc'),
        where('userID', '==', userID))
    const messageIsRead = checkedOption === 'read' ? true : false
    const checkedOptionQuery = query(collectionRef,
        where('userID', '==', userID),
        where('isRead', '==', messageIsRead)
    )
    const queryConditions = checkedOption === 'all' ? allMessageQuery : checkedOptionQuery
    getDocs(queryConditions).then(querySnapshot => {
        let messagesList = querySnapshot.docs.map(message => {
            return ({
                ...message.data(),
                date: message.data().date.toDate(),
                id: message.id,
            })
        })
        setMessagesList(messagesList)
    })
}