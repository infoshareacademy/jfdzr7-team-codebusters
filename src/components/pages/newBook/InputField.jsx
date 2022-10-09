import { StyledInput } from "./NewBook.styled";

export const InputField = ({ title, type, value, onChange, name, min }) => {
    return (
        <label>{title}
            <StyledInput
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                min={min}
            />
        </label>
    );
};