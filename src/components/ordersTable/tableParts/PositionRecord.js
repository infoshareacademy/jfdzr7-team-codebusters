import { useEffect } from "react"
import { useState } from "react"
import { getBookDetails } from "./../../../utils/getBookDetails"
export const PositionRecord = ({ className, position, index }) => {
    const [BookDetails, setBookDetails] = useState({
        title: '',
        author: ''
    })
    useEffect(() => {
        getBookDetails(setBookDetails, position.bookID)
    }, [position.bookID])
    return (
        <div className={className}>
            <p>{index + 1}</p>
            <p>{BookDetails.author}</p>
            <p>{BookDetails.title}</p>
            <p>{position.quantity}</p>
        </div>
    )
}