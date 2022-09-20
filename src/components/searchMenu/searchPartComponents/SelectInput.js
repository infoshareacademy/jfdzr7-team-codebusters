export const SelectInput = ({
    labelText,
    name,
    value,
    callback,
    sortOptions }) => {
    return (
        <label htmlFor={name}>{labelText}
            <select
                name={name}
                value={value}
                onChange={event => callback(event)}>
                {sortOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    )
}