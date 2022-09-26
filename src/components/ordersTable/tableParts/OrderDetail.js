import { StyledPositionHeader } from "./StyledPositionHeader"
import { StyledPositionRecord } from "./StyledPositionRecord"

export const OrderDetail = ({ className, positions }) => {
    return (
        <div className={className}>
            <StyledPositionHeader />
            {positions.map((position, index) => <StyledPositionRecord key={index} position={position} index={index} />)}
        </div>
    )
}