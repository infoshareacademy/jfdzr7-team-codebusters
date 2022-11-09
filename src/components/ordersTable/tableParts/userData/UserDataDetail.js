import { StyledUserDataDetail } from "./UserDataDetail.styled"

export const UserDataDetail = ({ userData }) => {
    return (
        <StyledUserDataDetail>
            <div>
                <h4>Name:</h4>
                <p>{userData.name}</p>
            </div>
            <div>
                <h4>Surname:</h4>
                <p>{userData.surname}</p>
            </div>
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
            <div>
                <h4>Delivery:</h4>
                <p>{userData.delivery}</p>
            </div>
            <div>
                <h4>Payment:</h4>
                <p>{userData.payment}</p>
            </div>
        </StyledUserDataDetail>
    )
}