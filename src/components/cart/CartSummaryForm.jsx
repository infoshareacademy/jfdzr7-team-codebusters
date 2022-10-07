import React from "react";
import { StyledButton, StyledInput, StyledForm } from "./Cart.styled";
import { addDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import { collection } from "firebase/firestore";

// const collectionRef = collection(db, "orders");
// addDoc(collectionRef, data);

// const data = {};
export const CartSummaryForm = () => {
  return (
    <>
      <StyledForm>
        <div>
          <label htmlFor="name">Name</label>
          <StyledInput type="name" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <StyledInput type="surname" name="surname" id="surname" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <StyledInput type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <StyledInput type="phone" name="phone" id="phone" />
        </div>
        <div>
          <p>Address</p>
          <label htmlFor="city">City</label>
          <StyledInput type="city" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <StyledInput type="street" name="street" id="street" />
        </div>
        <div>
          <p htmlFor="payment">Choose your method of payment</p>

          <div>
            <input type="radio" id="payment1" name="payment" value="Blik" />
            <label htmlFor="payment1">Blik</label>

            <input type="radio" id="payment2" name="payment" value="Card" />
            <label htmlFor="payment2">Card</label>
          </div>
          <StyledButton>Submit order</StyledButton>
        </div>
      </StyledForm>
    </>
  );
};
