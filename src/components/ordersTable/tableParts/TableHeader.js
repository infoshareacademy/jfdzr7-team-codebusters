import { StyledTableHeader } from "../OrdersTable.styled"

export const TableHeader = ({ className, headers, numberOfColumns }) => {
    return (
        <StyledTableHeader numberOfColumns={numberOfColumns}>
            {headers.map(header => <h3 key={header}>{header}</h3>)}
        </StyledTableHeader >
    )
}