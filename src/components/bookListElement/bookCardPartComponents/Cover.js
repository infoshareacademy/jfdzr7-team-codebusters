import { useEffect, useState } from "react"

import { getCover } from "../../../utils/getCover"
import { StyledCover } from "./BookCardPartComponents.styled"

export const Cover = ({ cover }) => {
    const [coverURL, setCoverURL] = useState('')
    useEffect(() => {
        getCover({ cover, setCoverURL })
    }, [cover])
    return (
        <StyledCover aria-hidden={true}>
            <img src={coverURL} alt='cover' />
        </StyledCover>
    )
}