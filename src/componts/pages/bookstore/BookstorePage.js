import { useEffect, useState } from "react"
import { collection, getDocs, orderBy, query, where, get } from 'firebase/firestore'
import { CategoryRadioButtonContainer } from "./CategoryRadioButton"
import { db } from '../../../api/firebase'
import { categoriesOfBooks } from "../../../utils/categoriesOfBooks"

export const BookstorePage = () => {
    const sortOptions = ['author', 'title', 'price']
    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    const [selectedSortOption, setSelectedSortOption] = useState('title')
    const [selectedPriceRange, setSelectedPriceRange] = useState({
        minPrice: 0,
        maxPrice: 400
    })
    const [booksList, setBooksList] = useState([])
    useEffect(() => {
        const collectionRef = collection(db, 'books')
        console.log(selectedSortOption)
        getDocs(query(collectionRef,
            where('price', '>=', selectedPriceRange.minPrice),
            where('price', '<=', selectedPriceRange.maxPrice),
            where('category', 'array-contains', checkedCategoryOfBook
            ))).then(querySnapshot => {
                const booksList = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                if (selectedSortOption !== 'price') {
                    booksList.sort((a, b) => a[selectedSortOption].localeCompare(b[selectedSortOption]))
                }
                setBooksList(booksList)
            })

    }, [selectedPriceRange, checkedCategoryOfBook, selectedSortOption])

    console.log(booksList)

    const booksListElement = booksList.map((book) => {
        return (
            <article key={book.id}>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>{book.price}</p>
            </article>
        )
    })
    const handleOptionChange = (event) => {
        setSelectedSortOption(event.currentTarget.value)
    }
    const handlePriceChange = (event, partOfPrice) => {
        if (partOfPrice === 'minPrice' &&
            +event.currentTarget.value > selectedPriceRange.maxPrice) {
            event.currentTarget.value = selectedPriceRange.maxPrice
        }
        if (partOfPrice === 'maxPrice' &&
            +event.currentTarget.value < selectedPriceRange.minPrice) {
            event.currentTarget.value = selectedPriceRange.minPrice
        }
        setSelectedPriceRange({
            ...selectedPriceRange,
            [partOfPrice]: +event.currentTarget.value
        })
    }
    return (
        <main>
            <form className="CategoryButtonsContainer">
                {categoriesOfBooks.map(category =>
                    <CategoryRadioButtonContainer key={category} category={category}
                        checkedCategoryOfBook={checkedCategoryOfBook} setCheckedCategoryOfBook={setCheckedCategoryOfBook}
                    />)}
                <div>
                    <label htmlFor={'sortOptionsList'}>order by
                        <select
                            name={'sortOptionsList'}
                            value={selectedSortOption}
                            onChange={event => handleOptionChange(event)}>
                            {sortOptions.map(option => <option key={option} value={option}> {option} </option>)}
                        </select>
                    </label>
                </div>
                <div>
                    <label htmlFor="priceRangeInput">
                        Price:
                        <input type='number'
                            min={0}
                            max={selectedPriceRange.maxPrice}
                            value={selectedPriceRange.minPrice}
                            onChange={event => handlePriceChange(event, 'minPrice')} />-
                        <input type='number'
                            min={selectedPriceRange.minPrice}
                            max={100}
                            value={selectedPriceRange.maxPrice}
                            onChange={event => handlePriceChange(event, 'maxPrice')} />
                    </label>
                </div>
                <div>
                    <label htmlFor='serchbar'>Serch
                        <input
                            type='text'
                            placeholder='e.g. Hello World!'
                        // onChange={event => performQuery(event.target.value)}
                        />
                    </label>
                </div>
            </form>
            <section>
                {booksListElement}
            </section>
        </main >
    )
}