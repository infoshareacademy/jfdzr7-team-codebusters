import { StyledTextarea } from "./Contact.styled";

export const TextareaField = ({ title, value, setValue }) => {
    return (
        <>
            <label>{title}<br />
                <StyledTextarea
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
            </label><br />
        </>
    );
};