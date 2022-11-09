import { deleteDoc, doc, increment, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useContext } from "react";
import { db, storage } from "../../../../api/firebase";
import { BooksListContext } from "../../../../providers/BooksListProvider";
import { StyledButtonContainer, StyledButton, } from "./WarehousePage.styled";

const addBooksHandler = (setQuantityComponent, bookID) => {
    const addQuantity = prompt('Enter quantity of new books in the storage')
    if (checkQuantity(addQuantity)) {
        setQuantityComponent(prevState => {
            const checkIfIsStillAvailale = +prevState + +addQuantity > 0
            const bookDocRef = doc(db, 'books', bookID)
            const updateBookQuantity = {
                quantity: increment(addQuantity),
                available: checkIfIsStillAvailale
            }
            updateDoc(bookDocRef, updateBookQuantity)
            return +prevState + +addQuantity
        })
    }
    else {
        alert('Entered wrong quantity. Try again')
    }

}
const subtractBooksHandler = (quantityComponent, setQuantityComponent, bookID) => {
    const substractQuantity = prompt('Enter quantity of new books in the storage')
    if (checkQuantity(substractQuantity)) {
        setQuantityComponent(prevState => {
            const checkIfIsStillAvailale = +prevState - +substractQuantity > 0
            const bookDocRef = doc(db, 'books', bookID)
            const updateBookQuantity = {
                quantity: increment(-substractQuantity),
                available: checkIfIsStillAvailale
            }
            updateDoc(bookDocRef, updateBookQuantity)

            return +prevState - +substractQuantity
        })
    }
    else if (!checkQuantity(substractQuantity)) {
        alert('Entered wrong quantity. Try again')
    }
    else if (substractQuantity > quantityComponent) {
        alert('You tried remove more books then you have, try again')
    }


}

const checkQuantity = (quantity) => {
    return +quantity > 0 && !isNaN(+quantity) && !quantity.toString().includes('.')
}

const deleteBook = (cover, id, setBooksList) => {
    const coverRef = ref(storage, cover)
    deleteObject(coverRef)
    const bookRef = doc(db, 'books', id)
    deleteDoc(bookRef)
    setBooksList(prevMessagesList =>
        prevMessagesList.filter(book => book.id !== id))
}

export const ButtonContainer = ({ cover, id, isEditPriceActive, setIsEditPriceActive, quantityComponent, setQuantityComponent }) => {
    const { setBooksList } = useContext(BooksListContext)
    return (
        <StyledButtonContainer>
            <StyledButton onClick={(e) => addBooksHandler(setQuantityComponent, id)}>
                Add Books
            </StyledButton>
            <StyledButton onClick={(e) => subtractBooksHandler(quantityComponent, setQuantityComponent, id)}>
                Subtract Books
            </StyledButton>
            <StyledButton onClick={(e) => setIsEditPriceActive(true)}>Edit Price
            </StyledButton>
            <StyledButton onClick={(e) => deleteBook(cover, id, setBooksList)}>
                Delete
            </StyledButton>
        </StyledButtonContainer>
    )

}