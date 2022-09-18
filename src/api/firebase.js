import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()
const auth = getAuth(app);

export { db, storage, auth }

