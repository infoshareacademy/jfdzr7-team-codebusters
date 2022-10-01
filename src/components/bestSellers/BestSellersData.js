import { db } from '../../api/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { query, orderBy, limit } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { BookCard } from '../bookListElement/BookCard';
import { StyledBestSellersData, StyledH2 } from '../bestSellers/BestSellers.styled'


export const BestSellersData = () => {
    const [books, setBooks] = useState([])
    const getBooks = () => {
        const booksCollection = collection(db, 'books')
        const q = query(booksCollection, orderBy("sold", "desc"), limit(4));

        getDocs(q).then(querySnapshot => {
            const books = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            setBooks(books)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
            <StyledH2>We recommend our best-selling books</StyledH2>
            <StyledBestSellersData>
                {books.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            price={book.price}
                            cover={book.cover}
                            quantity={book.quantity}
                        />
                    )
                })}
            </StyledBestSellersData>
        </>
    )
}
