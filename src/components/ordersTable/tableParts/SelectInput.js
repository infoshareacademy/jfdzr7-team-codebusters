export const SelectInput = ({
    labelText,
    name,
    value,
    callback,
    statusOptions,
    onClickCallback }) => {
    return (
        <label htmlFor={name}>{labelText}
            <select
                name={name}
                value={value}
                onChange={event => callback(event)}
                onClick={event => onClickCallback(event)}>
                {statusOptions.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
    )
}