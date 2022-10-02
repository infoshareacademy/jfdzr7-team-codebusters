import { useState, useEffect } from "react"
import { getUserData } from '../../../../utils/getUserData'
import { StyledUserDataDetail } from "./UserDataDetail.styled"

export const UserDataDetail = ({ userID }) => {
    const [userData, setUserData] = useState({})
    useEffect(() => {
        getUserData(setUserData, userID)
    }, [userID])
    return (
        <StyledUserDataDetail>
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
        </StyledUserDataDetail>
    )
}