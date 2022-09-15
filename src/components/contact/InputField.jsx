import { StyledInput } from "./Contact.styled";

export const InputField = ({ title, type, value, setValue }) => {
    return (
        <>
            <label>{title}<br />
                <StyledInput
                    type={type}
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
            </label><br />
        </>
    );
};