import { db } from "../api/firebase"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"

export const getBestsellers = (setBooks) => {
    const booksCollection = collection(db, 'books')
    const q = query(booksCollection, orderBy("sold", "desc"), limit(4));

    getDocs(q).then(querySnapshot => {
        const books = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        setBooks(books)
    })
}
