import { db } from "../api/firebase";

import { addDoc, collection } from "firebase/firestore";
import { dateToString } from "./dateToString";

export const createOrder = (orderData) => {
  const collectionRef = collection(db, "orders");
  const today = new Date();
  const data = {
    orderDate: dateToString(today),
    orderValue: Number(cart.total) + 15,
    positions: cart,
    status: "waiting",
    user: {
      email: user.email,
    },
  };

  addDoc(collectionRef, data);
};
