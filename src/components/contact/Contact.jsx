import { useState, useRef } from 'react';
import { StyledButton, StyledDiv, StyledH2 } from './Contact.styled';
import { InputField } from './InputField';
import { TextareaField } from './TextareaField';
import emailjs from '@emailjs/browser';



export const Contact = () => {
    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        emailjs.sendForm(
            'service_63ullf7',
            'template_6u0hm8a',
            form.current,
            'ieDQU1btk6_-lNbJd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert('Message has been sent!');
        setEmail('');
        setMessage('');
        setName('');
    };

    return (
        <StyledDiv>
            <StyledH2>If you have any questuion<br />send the message!</StyledH2>
            <form onSubmit={handleSubmit} ref={form}>
                <InputField title={'Name'} type={'text'} value={name} setValue={setName} name={'user_name'} />
                <InputField title={'Email'} type={'email'} value={email} setValue={setEmail} name={'user_email'} />
                <TextareaField title={'Message'} value={message} setValue={setMessage} name={'message'} />
                <StyledButton type='submit' value='Send' />
            </form>
        </StyledDiv >
    );
};