import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../api/firebase"
import { getMessagesList } from "../../../../utils/getMessages";

export const deleteMessage = (messageID, setMessagesList) => {
    const docRef = doc(db, 'messages', messageID)
    deleteDoc(docRef)
}

export const changeIsReadStatus = () => {
    console.log('zmiana')
}