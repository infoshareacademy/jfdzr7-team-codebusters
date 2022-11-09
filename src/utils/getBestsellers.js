import { db } from "../api/firebase"
import { collection, startAt, where, getDocs, query, orderBy, limit } from "firebase/firestore"

export const getBestsellers = (setBooks) => {
    const booksCollection = collection(db, 'books')
    const q = query(booksCollection,
        where('sold', '>', 0),
        where('available', '==', true),
        orderBy("sold", "desc"), limit(4))

    getDocs(q).then(querySnapshot => {
        const books = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))
        console.log(books)
        setBooks(books)
    })
}
