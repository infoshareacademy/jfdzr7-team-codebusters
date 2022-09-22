import { useEffect, useState } from "react"
import { getCover } from "../../../utils/getCover"

export const Cover = ({ className, cover }) => {
    const [coverURL, setCoverURL] = useState('')
<<<<<<< HEAD
    useEffect(() => {
        getCover({ cover, setCoverURL })
    }, [])
=======
>>>>>>> develop
    useEffect(() => {
        getCover({ cover, setCoverURL })
    }, [cover])
    return (
        <div className={className} aria-hidden={true}>
            <img src={coverURL} alt='cover' />
        </div>
    )
}