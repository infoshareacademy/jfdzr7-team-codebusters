import { StyledTextarea } from "./Contact.styled";

export const TextareaField = ({ title, value, onChange, name }) => {
    return (
        <label>{title}<br />
            <StyledTextarea
                value={value}
                name={name}
                onChange={onChange}
            />
        </label>
    );
};