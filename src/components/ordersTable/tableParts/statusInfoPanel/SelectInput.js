export const SelectInput = ({
    labelText,
    name,
    value,
    callback,
    statusOptions,
    onClickCallback }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={event => callback(event)}
            onClick={event => onClickCallback(event)}>
            {statusOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    )
}