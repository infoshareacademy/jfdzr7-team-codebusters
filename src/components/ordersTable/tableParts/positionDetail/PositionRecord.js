import { useEffect, useState } from "react"

import { getBookDetails } from "../../../../utils/getBookDetails"
import { StyledPositionRecord } from "./PositionsDetail.styled"

export const PositionRecord = ({ position, index }) => {
    const [BookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        price: 0
    })
    useEffect(() => {
        getBookDetails(setBookDetails, position.bookID)
    }, [position.bookID])
    return (
        <StyledPositionRecord>
            <p>{index + 1}</p>
            <p>{BookDetails.author}</p>
            <p>{BookDetails.title}</p>
            <p>{BookDetails.price}</p>
            <p>{position.quantity}</p>
        </StyledPositionRecord>
    )
}