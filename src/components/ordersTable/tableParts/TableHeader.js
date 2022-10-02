import { StyledTableHeader } from "../OrdersTable.styled"

export const TableHeader = ({ className, headers, numberOfColumns }) => {
    return (
        <StyledTableHeader numberOfColumns={numberOfColumns}>
            {headers.map((header, index) => <h3 key={index}>{header}</h3>)}
        </StyledTableHeader >
    )
}