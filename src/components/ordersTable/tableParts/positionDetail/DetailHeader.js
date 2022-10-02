import { StyledDetailHeader } from "./PositionsDetail.styled"

export const DetailHeader = ({ headers, numberOfColumns }) => {
    return (
        <StyledDetailHeader numberOfColumns={numberOfColumns} >
            {headers.map((header, index) => <h4 key={index}>{header}</h4>)}
        </StyledDetailHeader>
    )
}