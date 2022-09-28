import { useState, useRef } from 'react';
import { StyledButton, StyledContainer, StyledH2, ContactBackground } from './Contact.styled';
import { InputField } from './InputField';
import { TextareaField } from './TextareaField';
import { FORM_INITIAL_VALUES } from './constants';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const [formValues, setFormValues] = useState(FORM_INITIAL_VALUES);

    const sendEmail = () => {
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues(FORM_INITIAL_VALUES);
        sendEmail();
        alert('Message has been sent!');
    };

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        setFormValues({ ...formValues, [inputName]: e.target.value })
    }

    return (
        <ContactBackground>
            <StyledContainer>
                <StyledH2>If you have any <span className='orange__font'>question</span><br />send the <span className='orange__font'>message</span>!</StyledH2>
                <form onSubmit={handleSubmit} ref={form}>
                    <InputField title={'Name'} type={'text'} value={formValues.user_name} onChange={onChangeHandler} name={'user_name'} />
                    <InputField title={'Email'} type={'email'} value={formValues.user_email} onChange={onChangeHandler} name={'user_email'} />
                    <TextareaField title={'Message'} value={formValues.message} onChange={onChangeHandler} name={'message'} />
                    <StyledButton type='submit' value='Send' />
                </form>
            </StyledContainer >
        </ContactBackground >
    );
};