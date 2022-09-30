import { useState, useEffect } from "react"
import { getUserData } from '../../../utils/getUserData'

export const UserDataDetail = ({ className, userID }) => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        getUserData(setUserData, userID)
    }, [userID])
    return (
        <div className={className}>
            <h4>City:</h4>
            <p>{userData.address?.city}</p>
            <h4>Street:</h4>
            <p>{userData.address?.street}</p>
            <h4>Telefon:</h4>
            <p>{userData.telefon}</p>
        </div>
    )
}