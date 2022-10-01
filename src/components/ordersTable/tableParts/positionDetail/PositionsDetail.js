import { StyledDetailHeader } from "../StyledDetailHeader"
import { StyledPositionRecord } from "./StyledPositionRecord"

export const PositionsDetail = ({ className, positions }) => {
    const headers = ['lp', 'author', 'title', 'price', 'quantity']
    const numberOfColumns = headers.length
    return (
        <div className={className}>
            <StyledDetailHeader headers={headers} numberOfColumns={numberOfColumns} />
            {positions.map((position, index) => <StyledPositionRecord key={index} position={position} index={index} />)}
        </div>
    )
}