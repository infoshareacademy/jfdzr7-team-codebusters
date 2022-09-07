import { useState } from "react"
import { CategoryRadioButtonContainer } from "./CategoryRadioButton"

export const BookstorePage = () => {
    const categoriesOfBook = ['all', 'classic', 'crime', 'fantasy']
    const sortOptions = ['autor', 'title', 'price']
    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    const [selectedSortOption, setSelectedSortOption] = useState('title')
    const handleOptionChange = (event) => {
        setSelectedSortOption(event.currentTarget.value)
    }
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
            </form>
        </main >
    )
}