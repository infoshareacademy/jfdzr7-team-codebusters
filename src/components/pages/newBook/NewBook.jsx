import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../api/firebase";
import { useState, useRef } from 'react';
import { StyledButton, StyledContainer, StyledH2, NewBookBackground } from './NewBook.styled';
import { InputField } from './InputField';

import { FORM_INITIAL_VALUES } from "./constants";

export const NewBook = () => {
    // const id = firebase.firestore().collection('books').doc().id
    const formRef = useRef();
    const [formValues, setFormValues] = useState(FORM_INITIAL_VALUES);

    // const addNewBook = ({ author, category, cover, isbn, pages, price, published, quantity, sold, title }) => {
    const addNewBook = () => {
        setDoc(doc(db, "books", 'test2'), {
            author: formValues.author,
            category: formValues.category,
            cover: formValues.cover,
            isbn: formValues.isbn,
            pages: formValues.pages,
            price: formValues.price,
            published: Timestamp.fromDate(new Date(formValues.published)),
            quantity: formValues.quantity,
            sold: formValues.sold,
            title: formValues.title
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBook();
    };

    const onChangeHandler = (e) => {
        const inputName = e.target.name;
        setFormValues({ ...formValues, [inputName]: e.target.value });
    };

    return (
        <NewBookBackground>
            <StyledContainer>
                <StyledH2>You can add <span className='orange__font'>new book </span>here!</StyledH2>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <InputField title={'Author'} type={'text'} value={formValues.author} onChange={onChangeHandler} name={'author'} />
                    <InputField title={'Title'} type={'text'} value={formValues.title} onChange={onChangeHandler} name={'title'} />
                    <InputField title={'Category'} type={'text'} value={formValues.category} onChange={onChangeHandler} name={'category'} />
                    <InputField title={'ISBN'} type={'number'} value={formValues.isbn} onChange={onChangeHandler} name={'isbn'} />
                    <InputField title={'Pages'} type={'number'} value={formValues.pages} onChange={onChangeHandler} name={'pages'} />
                    <InputField title={'Cover'} type={'text'} value={formValues.cover} onChange={onChangeHandler} name={'cover'} />
                    <InputField title={'Published'} type={'date'} value={formValues.published} onChange={onChangeHandler} name={'published'} />
                    <InputField title={'Price'} type={'number'} value={formValues.price} onChange={onChangeHandler} name={'price'} />
                    <InputField title={'Quantity'} type={'number'} value={formValues.quantity} onChange={onChangeHandler} name={'quantity'} />
                    <InputField title={'Sold'} type={'number'} value={formValues.sold} onChange={onChangeHandler} name={'sold'} />
                    <StyledButton type='submit' value='Send' />
                </form>
            </StyledContainer >
        </NewBookBackground >
    );



};