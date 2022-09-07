import { useState } from "react"
import { CategoryRadioButtonContainer } from "./CategoryRadioButton"

export const BookstorePage = () => {
    const categoriesOfBook = ['all', 'classic', 'crime', 'fantasy']
    const sortOptions = ['autor', 'title', 'price']
    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    const [selectedSortOption, setSelectedSortOption] = useState('title')
    const [selectedPriceRange, setSelectedPriceRange] = useState({
        minPrice: 0,
        maxPrice: 100
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
    console.log(selectedPriceRange)
    return (
        <main>
            <form className="CategoryButtonsContainer">
                {categoriesOfBook.map(category =>
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
            </form>
        </main >
    )
}