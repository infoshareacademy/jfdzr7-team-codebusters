import { useState } from "react"
import { CategoryRadioButtonContainer } from "./CategoryRadioButton"

export const BookstorePage = () => {
    const categoriesOfBook = ['all', 'classic', 'crime', 'fantasy']
    const [checkedCategoryOfBook, setCheckedCategoryOfBook] = useState('all')
    return (
        <main>
            <form className="CategoryButtonsContainer">
                {categoriesOfBook.map(category =>
                    <CategoryRadioButtonContainer key={category} category={category}
                        checkedCategoryOfBook={checkedCategoryOfBook} setCheckedCategoryOfBook={setCheckedCategoryOfBook}
                    />)}
            </form>
        </main>
    )
}