import { db } from "../api/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export const createOrder = (cart, orderData, total, user) => {
  const collectionRef = collection(db, "orders");

  const data = {
    orderDate: Timestamp.now(),
    orderValue: Number(total),
    positions: cart,
    status: "waiting",
    user: {
      name: orderData.name,
      surname: orderData.surname,
      email: orderData.email,
      phone: orderData.phone,
      city: orderData.city,
      street: orderData.street,
      payment: orderData.payment,
      delivery: orderData.delivery,
      userID: user.id,
    },
  };
  addDoc(collectionRef, data);
};
