import { StyledPositionRecord } from "./StyledPositionRecord"

export const OrderDetail = ({ className, positions }) => {
    return (
        <div className={className}>
            Hello Everyone!
            {positions.map((position, index) => <StyledPositionRecord key={index} position={position} />)}
        </div>
    )
}