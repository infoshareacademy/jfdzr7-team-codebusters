import { useContext, useState } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import { AddressInput } from "./AddressInput"
import { Input } from "./Input"
import { StyledButton } from "./AccountPage.styled"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../../api/firebase"

const updateUserData = (event, setIsEditStatusActive, formValues, setUser) => {
    event.preventDefault()
    const userDocRef = doc(db, 'users', formValues.id)
    updateDoc(userDocRef, formValues)
    setUser({ ...formValues })
    setIsEditStatusActive(prevState => !prevState)
}

export const AccountFormPanel = ({ setIsEditStatusActive }) => {
    const { user, setUser } = useContext(AuthContext)
    const [formValues, setFormValues] = useState({ ...user })
    return (
        <form>
            <h3>Personal Data:</h3>
            <Input formValues={formValues} setFormValues={setFormValues} name='name' />
            <Input formValues={formValues} setFormValues={setFormValues} name='surname' />
            <h3>Contact:</h3>
            <Input formValues={formValues} setFormValues={setFormValues} name='phone' />
            <h3>Address:</h3>
            <AddressInput formValues={formValues} setFormValues={setFormValues} name='city' />
            <AddressInput formValues={formValues} setFormValues={setFormValues} name='street' />
            <StyledButton type="submit" onClick={(event) => updateUserData(event, setIsEditStatusActive, formValues, setUser)}> Save</StyledButton >
            <StyledButton onClick={() => setIsEditStatusActive(prevState => !prevState)}>Cancel</StyledButton>
        </form>
    )
}