import { useShoppingCart } from "../context/CartContext";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../api/firebase";
import { useState } from "react";

export const CartItem = ({ id, count }) => {
  const [bookList, setBookList] = useState([]);
  const getBooksList = () => {
    const collectionRef = collection(db, "books");
    getDocs(query(collectionRef)).then((querySnapshot) => {
      let booksList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBookList(booksList);
    });
  };
  getBooksList();

  const { removeFromCart } = useShoppingCart();

  const item = bookList.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <div>
      <div>{item.cover}</div>
      <div>
        {item.title}
        {count > 1 && <span>{count}x</span>}
      </div>
      <div>{item.price}</div>
      <div>{item.price * count}</div>
      <button onClick={removeFromCart(item.id)}>Remove</button>
    </div>
  );
};
