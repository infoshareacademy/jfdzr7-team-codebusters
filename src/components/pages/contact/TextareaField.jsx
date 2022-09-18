import { StyledTextarea } from "./Contact.styled";

export const TextareaField = ({ title, value, setValue, name }) => {
    return (
        <>
            <label>{title}<br />
                <StyledTextarea
                    value={value}
                    name={name}
                    onChange={(e) => { setValue(e.target.value) }}
                />
            </label><br />
        </>
    );
};