import { useEffect } from "react"
import { useState } from "react"
import { getBookDetails } from "../../../../utils/getBookDetails"

export const PositionRecord = ({ className, position }) => {
    const [BookDetails, setBookDetails] = useState({
        title: '',
        author: ''
    })
    useEffect(() => {
        getBookDetails(setBookDetails, position.bookID)
    }, [])
    return (
        <div className={className}>
            <p>{BookDetails.author}</p>
            <p>{BookDetails.title}</p>
            <p>{position.quantity}</p>
        </div>
    )
}