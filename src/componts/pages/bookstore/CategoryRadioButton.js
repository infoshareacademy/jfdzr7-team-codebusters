export const CategoryRadioButtonContainer = ({ category, checkedCategoryOfBook, setCheckedCategoryOfBook }) => {
    const handleChange = (event) => {
        setCheckedCategoryOfBook(event.currentTarget.value)
    }
    return (
        <>
            <label htmlFor={'categoryOfBook-' + category}>
                <input type={'radio'}
                    id={'categoryOfBook-' + category}
                    name={'CategoryOfBook'}
                    value={category}
                    checked={checkedCategoryOfBook === category}
                    onChange={(event) => handleChange(event)} />
                {category}</label>
        </>
    )
}