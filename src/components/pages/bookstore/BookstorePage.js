import { BooksListProvider } from "../../../providers/BooksListProvider"
import { SearchMenu } from "../../searchMenu/SearchMenu"
import { BooksListElement } from "../../bookListElement/BooksListElement"
import { DecorationBar } from "../../decorationBar/DecorationBar"
import { useLocation } from "react-router-dom"

export const BookstorePage = () => {
    const location = useLocation()
    return (
        <BooksListProvider>
            <SearchMenu checkedOption={location.state || 'all'} />
            <DecorationBar />
            <BooksListElement />
        </BooksListProvider>
    )
}