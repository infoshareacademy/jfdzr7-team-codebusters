import { useContext } from 'react'
import { BooksSearchContext } from '../../../context/BooksSearchContext'
import { categoriesOfBooks } from '../../../utils/categoriesOfBooks'
import { StyledCategoryRadioButton } from './StyledCategoryRadioButton'

export const CategoryBar = ({ className }) => {
    const { checkedCategoryOfBook, setCheckedCategoryOfBook } = useContext(BooksSearchContext)
    return (
        <div className={className}>
            {categoriesOfBooks.map(category =>
                <StyledCategoryRadioButton
                    key={category}
                    category={category}
                    checkedCategoryOfBook={checkedCategoryOfBook}
                    setCheckedCategoryOfBook={setCheckedCategoryOfBook}
                />)}
        </div>
    )
}