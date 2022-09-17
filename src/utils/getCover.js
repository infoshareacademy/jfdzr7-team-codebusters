import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../api/firebase";

export const getCover = ({ cover, setCoverURL }) => {
    const coverReference = ref(storage, cover)
    getDownloadURL(coverReference).then((url) => {
        setCoverURL(url)
    })
}