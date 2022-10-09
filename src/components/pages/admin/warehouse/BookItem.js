import { useState, useEffect } from "react";
import { getCover } from "../../../../utils/getCover";
import { ButtonContainer } from "./ButtonContainer";
import { EditPriceButtons } from "./EditPriceButtons";
import { Input } from "./Input";
import { StyledBookItem, StyledBookCover, StyledBookTitle, StyledBookAuthor, StyledPrices, Wrapper } from "./WarehousePage.styled";

export const BookItem = ({
    id,
    author,
    cover,
    price,
    quantity,
    title
}) => {
    const [coverURL, setCoverURL] = useState("");
    const [isEditPriceActive, setIsEditPriceActive] = useState(false)
    const [newPrice, setNewPrice] = useState(price)
    useEffect(() => {
        getCover({ cover, setCoverURL });
    }, [cover]);
    const [priceComponent, setPriceComponent] = useState(price)
    const [quantityComponent, setQuantityComponent] = useState(quantity)
    return (
        <StyledBookItem>
            <StyledBookCover src={coverURL} alt="cover" />
            <Wrapper>
                <StyledBookTitle>
                    {title}
                </StyledBookTitle>
                <StyledBookAuthor>by {author}</StyledBookAuthor>
            </Wrapper>
            {isEditPriceActive ?
                <Input name='price' price={price} newPrice={newPrice} setNewPrice={setNewPrice} /> :
                <StyledPrices>{priceComponent} zł</StyledPrices>}
            <StyledPrices>{quantityComponent}</StyledPrices>
            {isEditPriceActive ?
                <EditPriceButtons newPrice={newPrice} setNewPrice={setNewPrice} priceBeforeEdit={newPrice} bookID={id} isEditPriceActive={isEditPriceActive} setIsEditPriceActive={setIsEditPriceActive} setPriceComponent={setPriceComponent} /> :
                <ButtonContainer isEditPriceActive={isEditPriceActive} setIsEditPriceActive={setIsEditPriceActive}
                    quantityComponent={quantityComponent} setQuantityComponent={setQuantityComponent}
                    cover={cover} id={id} />
            }
        </StyledBookItem>
    );
};
