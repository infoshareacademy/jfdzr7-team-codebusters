import { getDoc, doc } from "firebase/firestore";
import { db } from "../api/firebase";

export const getUser = (setUser, uid, setIsAuth) => {
  const docRef = doc(db, "users", uid);
  getDoc(docRef).then((querySnap) => {
    setUser({
      ...querySnap.data(),
      id: uid,
    });
    console.log(setIsAuth);
    setIsAuth(true);
  });
};
