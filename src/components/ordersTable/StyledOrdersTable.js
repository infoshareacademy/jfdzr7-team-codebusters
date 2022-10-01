import styled from "styled-components";
import { OrdersTable } from "./OrdersTable"

export const StyledOrdersTable = styled(OrdersTable)`
    display: grid;
    justify-self: center;
    grid-template-columns: repeat(1, auto);
    width: 900px;
`