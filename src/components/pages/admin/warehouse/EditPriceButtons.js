import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../api/firebase";
import { StyledButtonContainer, StyledButton, } from "./WarehousePage.styled";

const updatePrice = (bookID, newPrice, setIsEditPriceActive, setPriceComponent) => {
    const bookDocRef = doc(db, 'books', bookID)
    const updateBookPrice = {
        price: +newPrice
    }
    updateDoc(bookDocRef, updateBookPrice)
    setIsEditPriceActive(false)
    setPriceComponent(+newPrice)
}

const cancelPriceChange = (setIsEditPriceActive, setNewPrice, priceBeforeEdit) => {
    setIsEditPriceActive(false)
}
export const EditPriceButtons = ({ setIsEditPriceActive, setNewPrice, newPrice, bookID, setPriceComponent }) => {
    return (
        <StyledButtonContainer>
            <StyledButton onClick={() => updatePrice(bookID, newPrice, setIsEditPriceActive, setPriceComponent)}>Save
            </StyledButton>
            <StyledButton onClick={() => cancelPriceChange(setIsEditPriceActive, setNewPrice)}>
                Cancel
            </StyledButton>
        </StyledButtonContainer>
    )
}