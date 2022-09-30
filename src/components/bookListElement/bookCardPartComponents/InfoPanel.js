export const InfoPanel = ({ className, title, author, price }) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <p>by {author}</p>
            <p className="price">{price}</p>
        </div>
    )
}