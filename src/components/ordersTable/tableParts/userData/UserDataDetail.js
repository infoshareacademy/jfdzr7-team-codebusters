import { StyledUserDataDetail } from "./UserDataDetail.styled"

export const UserDataDetail = ({ userData }) => {
    return (
        <StyledUserDataDetail>
            <div>
                <h4>City:</h4>
                <p>{userData.city}</p>
            </div>
            <div>
                <h4>Street:</h4>
                <p>{userData.street}</p>
            </div>
            <div>
                <h4>Phone:</h4>
                <p>{userData.phone}</p>
            </div>
        </StyledUserDataDetail>
    )
}