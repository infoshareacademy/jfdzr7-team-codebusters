import { StyledInput } from "./Contact.styled";

export const InputField = ({ title, type, value, onChange, name }) => {
    return (
        <label>{title}<br />
            <StyledInput
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
        </label>
    );
};