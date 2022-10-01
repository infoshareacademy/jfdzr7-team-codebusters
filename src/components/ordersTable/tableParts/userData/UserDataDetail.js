import { useState, useEffect } from "react"
import { getUserData } from '../../../../utils/getUserData'

export const UserDataDetail = ({ className, userID }) => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        getUserData(setUserData, userID)
    }, [userID])
    return (
        <div className={className}>
            <div>
                <h4>City:</h4>
                <p>{userData.address?.city}</p>
            </div>
            <div>
                <h4>Street:</h4>
                <p>{userData.address?.street}</p>
            </div>
            <div>
                <h4>Phone:</h4>
                <p>{userData.telefon}</p>
            </div>
        </div>
    )
}