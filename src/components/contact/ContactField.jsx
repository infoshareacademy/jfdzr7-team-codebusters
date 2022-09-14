export const ContactField = ({ isMessage, title, type, value, setValue }) => {
    return (
        <>
            <label>{title}<br />
                <input
                    style={{ height: isMessage ? '60px' : '' }}
                    type={type}
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
            </label><br />
        </>
    );
};