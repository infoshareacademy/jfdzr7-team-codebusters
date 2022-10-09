import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import { Wrapper } from "./AccountPage.styled"


export const AccountInfoPanel = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <h3>Personal Data:</h3>
            <Wrapper>
                <h4>Name:</h4>
                <p>{user.name}</p>
            </Wrapper>
            <Wrapper>
                <h4>Surname:</h4>
                <p>{user.surname}</p>
            </Wrapper>
            <h3>Contact:</h3>
            <Wrapper>
                <h4>Phone:</h4>
                <p>{user.phone}</p>
            </Wrapper>
            <h3>Address:</h3>
            <Wrapper>
                <h4>City:</h4>
                <p>{user.address?.city}</p>
            </Wrapper>
            <Wrapper>
                <h4>Street:</h4>
                <p>{user.address?.street}</p>
            </Wrapper>
        </>
    )
}