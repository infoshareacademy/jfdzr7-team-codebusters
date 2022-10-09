import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../api/firebase";
import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { getUser } from "../utils/getUser";
import { db } from "../api/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(!!user);
  const isAdmin = !!user?.isAdmin;
  const isUser = isAuth && !user?.isAdmin;

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        getDoc(doc(db, "users", userData.uid)).then((querySnapshot) => {
          getUser(setUser, userData.uid, setIsAuth);
        });
      } else {
        setUser(false);
        setIsAuth(false);
      }
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        isAdmin,
        isUser,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
