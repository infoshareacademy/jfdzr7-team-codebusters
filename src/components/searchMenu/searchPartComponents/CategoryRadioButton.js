import { BooksSearchContext } from "../../../providers/BooksSearchContext"
import { useContext } from "react"
export const CategoryRadioButton = ({ className, category }) => {
    const { searchConditions, setSearchConditions } = useContext(BooksSearchContext)
    const handleChange = (event) => {
        setSearchConditions({
            ...searchConditions,
            checkedCategoryOfBook: event.currentTarget.value
        })
    }
    return (
        <>
            <input className={className} type={'radio'}
                id={'categoryOfBook-' + category}
                name={'CategoryOfBook'}
                value={category}
                checked={searchConditions.checkedCategoryOfBook === category}
                onChange={(event) => handleChange(event)} />
            <label htmlFor={'categoryOfBook-' + category}>{category}</label>
        </>
    )
}