export const CategoryRadioButton = ({ className, category, checkedCategoryOfBook, setCheckedCategoryOfBook }) => {
    const handleChange = (event) => {
        setCheckedCategoryOfBook(event.currentTarget.value)
    }
    return (
        <>
            <input className={className} type={'radio'}
                id={'categoryOfBook-' + category}
                name={'CategoryOfBook'}
                value={category}
                checked={checkedCategoryOfBook === category}
                onChange={(event) => handleChange(event)} />
            <label htmlFor={'categoryOfBook-' + category}> {category}</label>
        </>
    )
}