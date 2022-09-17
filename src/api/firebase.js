import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()

export { db, storage }