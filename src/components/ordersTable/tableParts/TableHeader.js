export const TableHeader = ({ className, headers }) => {
    return (
        <div className={className}>
            {headers.map((header, index) => <h3 key={index}>{header}</h3>)}
        </div>
    )
}