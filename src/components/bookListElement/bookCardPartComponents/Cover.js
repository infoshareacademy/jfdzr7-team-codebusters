import { useEffect, useState } from "react"
import { getCover } from "../../../utils/getCover"

export const Cover = ({ className, cover }) => {
    const [coverURL, setCoverURL] = useState('')
    useEffect(() => {
        getCover({ cover, setCoverURL })
    }, [])
    return (
        <div className={className} aria-hidden={true}>
            <img src={coverURL} alt='cover' />
        </div>
    )
}