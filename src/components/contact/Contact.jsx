import { useState } from "react";
import { StyledButton, StyledDiv, StyledH2 } from "./Contact.styled";
import { InputField } from "./InputField";
import { TextareaField } from "./TextareaField";

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);
        setEmail('');
        setMessage('');
        setName('');
    };

    return (
        <StyledDiv>
            <StyledH2>If you have any questuion<br />send the message!</StyledH2>
            <form onSubmit={handleSubmit}>
                <InputField title={'Name'} type={'text'} value={name} setValue={setName} />
                <InputField title={'Email'} type={'email'} value={email} setValue={setEmail} />
                <TextareaField title={'Message'} value={message} setValue={setMessage} />
                <StyledButton type="submit" value='Send' />
            </form>
        </StyledDiv >
    );
};