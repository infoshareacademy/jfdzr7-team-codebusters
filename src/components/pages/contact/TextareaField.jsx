import { StyledTextarea } from "./Contact.styled";

export const TextareaField = ({ title, value, onChange, name }) => {
    return (
        <label>{title}
            <StyledTextarea
                value={value}
                name={name}
                onChange={onChange}
            />
        </label>
    );
};