import book from '../../img/icons/book.png'

export const DecorationBar = ({ className }) => {
    return (
        <section className={className} aria-hidden={true}>
            <img src={book} alt='decoration bar with book' />
        </section>
    )
}