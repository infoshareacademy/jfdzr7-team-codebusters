import { db } from "../api/firebase";

import {
  doc,
  updateDoc,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const collectionName = "carts";

export const createCart = (cart, user) => {
  const collectionRef = collection(db, collectionName);

  const data = {
    positions: cart,
    user: {
      email: user.email,
    },
  };

  addDoc(collectionRef, data);
};

export const findCart = (user, setCart, setCartId) => {
  const collectionRef = collection(db, collectionName);
  const conditions = query(
    collectionRef,
    where("user.email", "==", user.email)
  );

  getDocs(conditions, collectionRef).then((querySnapshot) => {
    let foundCart = querySnapshot.docs.map((cart) => {
      return {
        ...cart.data(),
      };
    });
    const cartId = querySnapshot.docs.map((doc) => {
      return doc.id;
    });

    if (cartId[0] !== undefined) {
      setCartId(cartId[0]);
    }

    if (foundCart[0] == undefined) {
      setCart([]);
    } else {
      setCart(foundCart[0].positions);
    }
  });
};

export const updateCart = (cartId, cart, user) => {
  const docRef = doc(db, collectionName, cartId);

  const data = {
    positions: cart,
    user: {
      email: user.email,
    },
  };
  updateDoc(docRef, data);
};

export const deleteCart = () => {
  const docId = "ID";
  const docRef = doc(db, collectionName, docId);
  deleteDoc(docRef);
};

// In progress

// export const deleteBookFromCart = (bookToDelete, cartId) => {
//   console.log(cartId);
//   const cartRef = doc(db, collectionName, cartId);

//   updateDoc(cartRef, {
//     positions: arrayRemove(bookToDelete.id),
//   });
// };
