import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { useState } from 'react';
import { StyledButton, StyledContainer, StyledH2, NewBookBackground } from './NewBook.styled';
import { InputField } from './InputField';
import { FORM_INITIAL_VALUES } from "./constants";

export const NewBook = () => {
    const [formValues, setFormValues] = useState(FORM_INITIAL_VALUES);

    const addNewBook = () => {
        addDoc(collection(db, "books"), {
            author: formValues.author,
            category: formValues.category.replace(/\s/g, '').split(','),
            cover: formValues.cover,
            isbn: parseInt(formValues.isbn),
            pages: parseInt(formValues.pages),
            price: parseInt(formValues.price),
            published: Timestamp.fromDate(new Date(formValues.published)),
            quantity: parseInt(formValues.quantity),
            sold: 0,
            title: formValues.title
        });
    };

    const fieldIsValid = () => {
        if (!formValues.author) {
            alert('Field \'Author\' can\'t be empty!')
        } else if (!formValues.title) {
            alert('Field \'Title\' can\'t be empty!')
        } else if (!formValues.category) {
            alert('Field \'Category\' can\'t be empty!')
        } else if (!formValues.isbn) {
            alert('Field \'ISBN\' can\'t be empty!')
        } else if (!formValues.pages) {
            alert('Field \'Pages\' can\'t be empty!')
        } else if (!formValues.cover) {
            alert('Field \'Cover\' can\'t be empty!')
        } else if (Number.isNaN(new Date(formValues.published).getTime())) {
            alert('Field \'Published\' can\'t be empty!')
        } else if (!formValues.price) {
            alert('Field \'Price\' can\'t be empty!')
        } else if (!formValues.quantity) {
            alert('Field \'Quantity\' can\'t be empty!')
        } else {
            addNewBook();
            alert('Book has been added!');
            setFormValues(FORM_INITIAL_VALUES);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fieldIsValid();
    };

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        setFormValues({ ...formValues, [inputName]: e.target.value });
    };

    return (
        <NewBookBackground>
            <StyledContainer>
                <StyledH2>You can add <span className='orange__font'>new book </span>here!</StyledH2>
                <form onSubmit={handleSubmit}>
                    <InputField title={'Author'} type={'text'} value={formValues.author} onChange={onChangeHandler} name={'author'} />
                    <InputField title={'Title'} type={'text'} value={formValues.title} onChange={onChangeHandler} name={'title'} />
                    <InputField title={'Category (separate by comas)'} type={'text'} value={formValues.category} onChange={onChangeHandler} name={'category'} />
                    <InputField title={'ISBN'} type={'number'} value={formValues.isbn} onChange={onChangeHandler} name={'isbn'} />
                    <InputField title={'Pages'} type={'number'} value={formValues.pages} onChange={onChangeHandler} name={'pages'} />
                    <InputField title={'Cover'} type={'text'} value={formValues.cover} onChange={onChangeHandler} name={'cover'} />
                    <InputField title={'Published'} type={'date'} value={formValues.published} onChange={onChangeHandler} name={'published'} />
                    <InputField title={'Price'} type={'number'} value={formValues.price} onChange={onChangeHandler} name={'price'} />
                    <InputField title={'Quantity'} type={'number'} value={formValues.quantity} onChange={onChangeHandler} name={'quantity'} />
                    <StyledButton type='submit' value='Send' />
                </form>
            </StyledContainer >
        </NewBookBackground >
    );
};