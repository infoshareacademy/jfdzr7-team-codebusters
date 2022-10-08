import { DetailHeader } from "./DetailHeader"
import { PositionRecord } from "./PositionRecord"

export const PositionsDetail = ({ positions }) => {
    const headers = ['lp', 'author', 'title', 'price', 'quantity']
    const numberOfColumns = headers.length
    return (
        <div>
            <DetailHeader
                headers={headers}
                numberOfColumns={numberOfColumns} />
            {positions.map((position, index) => {
                return <PositionRecord
                    key={position.bookID}
                    position={position}
                    index={index} />
            }
            )}
        </div>
    )
}