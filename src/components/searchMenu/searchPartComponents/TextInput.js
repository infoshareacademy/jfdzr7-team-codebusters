export const TextInput = ({ name, labelText, callback }) => {
    return (
        <label htmlFor={name}>{labelText}
            <input
                name={name}
                type='text'
                placeholder='e.g. Hello World!'
                onChange={event => callback(event.currentTarget.value)}
            />
        </label>
    )
}