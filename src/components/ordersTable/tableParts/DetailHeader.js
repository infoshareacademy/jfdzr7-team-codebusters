export const DetailHeader = ({ className, headers }) => {
    return (
        <div className={className}>
            {headers.map((header, index) => <h4 key={index}>{header}</h4>)}
        </div>
    )
}