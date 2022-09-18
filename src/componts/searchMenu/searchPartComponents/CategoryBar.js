import { categoriesOfBooks } from '../../../utils/categoriesOfBooks'
import { StyledCategoryRadioButton } from './StyledCategoryRadioButton'

export const CategoryBar = ({ className }) => {
    return (
        <div className={className}>
            {categoriesOfBooks.map(category =>
                <StyledCategoryRadioButton
                    key={category}
                    category={category}
                />)}
        </div>
    )
}