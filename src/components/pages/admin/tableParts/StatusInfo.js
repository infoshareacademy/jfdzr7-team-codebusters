import { useState, useEffect } from "react"
import { StyledOrderDetail } from "./StyledOrderDetail"
import pencil from "./../../../../img/icons/pencil.png"
import { Wrapper } from "./Wrapper"
import cancel from "./../../../../img/icons/cancel.png"
import check from "./../../../../img/icons/check.png"
import { SelectInput } from "./SelectInput"
import { getUsername } from './../../../../utils/getUsername'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from "../../../../api/firebase"
import { dateToString } from "../../../../utils/dateToString"

export const StatusInfo = ({ status, isEditStatusActive, setIsEditStatusActive }) => {
    const changeEditStatus = (event) => {
        setIsEditStatusActive(!isEditStatusActive)
        event.stopPropagation()
    }
    return (
        <Wrapper>
            <p>{status}</p>
            <img src={pencil} height="20px" alt="edit" onClick={event => changeEditStatus(event)} />
        </Wrapper>
    )
}