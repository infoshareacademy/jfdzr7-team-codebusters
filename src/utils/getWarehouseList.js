import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../api/firebase'

const filterTitleAndAuthor = (searchText, booksList) => {
    return (booksList.filter(book => book.title.includes(searchText) || book.author.includes(searchText)))
}

const filterByPrice = (selectedPriceRange, booksList) => {
    return (booksList.filter(book => (book.price >= selectedPriceRange.minPrice && book.price <= selectedPriceRange.maxPrice)))
}

export const getWarehouseList = ({ setBooksList, checkedOption, selectedSortOption, selectedPriceRange, selectedQuantityRange, searchText }) => {
    const collectionRef = collection(db, 'books')
    getDocs(query(collectionRef,
        orderBy('quantity'),
        where('quantity', '>=', selectedQuantityRange.minQuantity),
        where('quantity', '<=', selectedQuantityRange.maxQuantity),
        where('category', 'array-contains', checkedOption
        ))).then(querySnapshot => {
            let booksList = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            if (selectedSortOption !== 'price' && selectedSortOption !== 'quantity') {
                booksList.sort((a, b) => a[selectedSortOption].localeCompare(b[selectedSortOption]))
            }
            if (selectedSortOption === 'price') {
                booksList.sort((a, b) => a.price < b.price)
            }
            booksList = filterByPrice(selectedPriceRange, booksList)
            if (searchText) {
                booksList = filterTitleAndAuthor(searchText, booksList)
            }
            setBooksList(booksList)
        })
}