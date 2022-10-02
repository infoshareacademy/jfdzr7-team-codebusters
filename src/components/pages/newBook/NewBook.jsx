import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../api/firebase";

export const NewBook = () => {
    setDoc(doc(db, "books", "test2"), {
        author: "test",
        category: ['all', 'testCategory'],
        cover: "testCover link",
        isbn: 666666666,
        pages: 365,
        price: 66.6,
        published: Timestamp.fromDate(new Date("December 10, 1815")),
        quantity: 5,
        sold: 5,
        title: "Test Book Full Form"
    });
};