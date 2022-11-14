import { db } from "../api/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { sendMessageToUser } from "../components/ordersTable/utils/statusChangeHandlers";

export const createOrder = (cart, orderData, total, user) => {
  const collectionRef = collection(db, "orders");
  const orderDate = Timestamp.now()
  const data = {
    orderDate: orderDate,
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
  sendMessageToUser(user.id, orderDate.toDate(), 'waiting')
  addDoc(collectionRef, data);
};
