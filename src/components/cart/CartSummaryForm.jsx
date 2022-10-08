import React from "react";
import { deleteCart } from "../../utils/cartdbHandlers";
import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { findCart } from "../../utils/cartdbHandlers";
import { AuthContext } from "../../providers/AuthProvider";
import {
  StyledInput,
  StyledForm,
  StyledLink,
  StyledFormWrapper,
  StyledDeliveryContainer,
  StyledOrderTotal,
  StyledTotalCost,
  StyledDeliveryHeader,
  StyledDeliveryInfo,
  StyledSubmitButton,
} from "./Cart.styled";
import { useState } from "react";

export const CartSummaryForm = () => {
  const { setCart, cartId, setCartId, total } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [orderData, setOrderData] = useState([]);

  const defaultFormState = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    payment: "",
    delivery: "",
  };
  const [orderFormValues, setOrderFormValues] = useState(defaultFormState);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    setOrderData([...orderData, orderFormValues]);
    // setOrderFormValues(defaultFormState);
    console.log([...orderData, orderFormValues]);
    console.log("form", orderFormValues);
    console.log("order", orderData);

    // createOrder(orderData);
    // deleteCart(cartId);
    // findCart(user, setCart, setCartId);
  };

  const updateOrderFormState = (e) => {
    setOrderFormValues({
      ...orderFormValues,
      [e.target.name]: e.target.value,
    });
    console.log("zmieniono", orderFormValues);
  };

  const delivery = 15;
  const totalCost = Number(total) + delivery;

  return (
    <StyledFormWrapper>
      <StyledDeliveryContainer>
        <StyledOrderTotal>
          <StyledDeliveryHeader>Order summary</StyledDeliveryHeader>
          <StyledDeliveryInfo>Value of items: {total} zł</StyledDeliveryInfo>
          <StyledDeliveryInfo>Delivery: 15zł</StyledDeliveryInfo>
          <StyledTotalCost>Total cost: {totalCost} zł</StyledTotalCost>
        </StyledOrderTotal>
        <StyledForm>
          <h1>Delivery information</h1>
          <label htmlFor="name">
            Name
            <StyledInput
              type="text"
              name="name"
              id="name"
              value={orderFormValues.name}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <label htmlFor="surname">
            Surname
            <StyledInput
              type="text"
              name="surname"
              id="surname"
              value={orderFormValues.surname}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <StyledInput
              type="email"
              name="email"
              id="email"
              value={orderFormValues.email}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <label htmlFor="phone">
            Phone
            <StyledInput
              type="tel"
              name="phone"
              id="phone"
              value={orderFormValues.phone}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <p>Address</p>
          <label htmlFor="city">
            City
            <StyledInput
              type="text"
              name="city"
              id="city"
              value={orderFormValues.city}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <label htmlFor="street">
            Street
            <StyledInput
              type="text"
              name="street"
              id="street"
              value={orderFormValues.street}
              onChange={updateOrderFormState}
              required
            />
          </label>
          <div>
            <p htmlFor="payment">Choose method of payment: </p>
            <label htmlFor="payment">
              Blik
              <input
                type="radio"
                name="payment"
                id="payment"
                onChange={updateOrderFormState}
                value={orderFormValues.payment}
              />
            </label>
            <label htmlFor="payment">
              Card
              <input
                type="radio"
                name="payment"
                value={orderFormValues.payment}
                id="payment"
                onChange={updateOrderFormState}
              />
            </label>
          </div>
          <div htmlFor="delivery">
            <p>Choose method of delivery:</p>
            <label htmlFor="delivery">
              InPost
              <input
                type="radio"
                name="delivery"
                value={orderFormValues.delivery}
                id="delivery"
                onChange={updateOrderFormState}
              />
            </label>
            <label htmlFor="delivery">
              DHL
              <input
                type="radio"
                name="delivery"
                value={orderFormValues.delivery}
                id="delivery"
                onChange={updateOrderFormState}
              />
            </label>
          </div>
          <StyledSubmitButton onClick={(e) => handleOrderSubmit(e)}>
            <StyledLink to="/summary">Submit order</StyledLink>
          </StyledSubmitButton>
        </StyledForm>
      </StyledDeliveryContainer>
    </StyledFormWrapper>
  );
};
