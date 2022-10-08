import { getDoc, doc } from "firebase/firestore";
import { db } from "../api/firebase";

export const getUser = (setUser, uid) => {
  const docRef = doc(db, "users", uid);
  getDoc(docRef).then((querySnap) => {
    setUser({
      ...querySnap.data(),
      ID: uid,
    });
  });
};
