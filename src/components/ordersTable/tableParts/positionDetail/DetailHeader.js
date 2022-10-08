import { StyledDetailHeader } from "./PositionsDetail.styled"

export const DetailHeader = ({ headers, numberOfColumns }) => {
    return (
        <StyledDetailHeader numberOfColumns={numberOfColumns} >
            {headers.map(header => <h4 key={header}>{header}</h4>)}
        </StyledDetailHeader>
    )
}