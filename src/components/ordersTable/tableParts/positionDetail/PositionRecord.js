import { useEffect, useState } from "react"

import { getBookDetails } from "../../../../utils/getBookDetails"
import { StyledPositionRecord } from "./PositionsDetail.styled"

export const PositionRecord = ({ position, index }) => {
    return (
        <StyledPositionRecord>
            <p>{index + 1}</p>
            <p>{position.author}</p>
            <p>{position.title}</p>
            <p>{position.price}</p>
            <p>{position.quantity}</p>
        </StyledPositionRecord>
    )
}