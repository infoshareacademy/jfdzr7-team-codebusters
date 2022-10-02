import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../api/firebase'

const filterTitleAndAuthor = (searchText, booksList) => {
    return (booksList.filter(book => book.title.includes(searchText) || book.author.includes(searchText)))
}

export const getBooksList = ({ setBooksList, checkedOption, selectedSortOption, selectedPriceRange, searchText }) => {
    const collectionRef = collection(db, 'books')
    getDocs(query(collectionRef,
        where('price', '>=', selectedPriceRange.minPrice),
        where('price', '<=', selectedPriceRange.maxPrice),
        where('category', 'array-contains', checkedOption
        ))).then(querySnapshot => {
            let booksList = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            if (selectedSortOption !== 'price') {
                booksList.sort((a, b) => a[selectedSortOption].localeCompare(b[selectedSortOption]))
            }
            if (searchText) {
                booksList = filterTitleAndAuthor(searchText, booksList)
            }
            setBooksList(booksList)
        })
}