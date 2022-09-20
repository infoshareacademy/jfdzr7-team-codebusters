import { StyledInput } from "./Contact.styled";

export const InputField = ({ title, type, value, setValue, name }) => {
    return (
            <label>{title}<br />
                <StyledInput
                    type={type}
                    value={value}
                    name={name}
                    onChange={(e) => { setValue(e.target.value) }}
                />
            </label>
    );
};