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
  arrayRemove,
  deleteField,
} from "firebase/firestore";

const collectionName = "carts";

export const createCart = (cart, user) => {
  const collectionRef = collection(db, collectionName);

  const data = {
    positions: { cart },
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

    if (foundCart[0] !== undefined) {
      console.log(foundCart[0].positions.cart);
      setCart(foundCart[0].positions.cart);
    } else {
      setCart([]);
    }

    // return {
    //   positions: foundCart[0].positions,
    //   cartId: cartId,
    // };
  });
};

export const updateCart = (cartId, cart, user) => {
  const docRef = doc(db, collectionName, cartId);

  const data = {
    positions: {
      cart,
    },
    user: {
      email: user.email,
    },
  };
  updateDoc(docRef, data);
};

export const deleteCart = () => {
  const docId = "cfas";
  const docRef = doc(db, collectionName, docId);
  deleteDoc(docRef);
};

export const deleteBookFromCart = (bookIndex, cartId) => {
  const cartRef = doc(db, collectionName, cartId[0].positions);
  console.log();
  updateDoc(cartRef, {
    cart: deleteField(bookIndex),
  });

  console.log("zrobione");
};
