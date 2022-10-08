import { BooksListProvider } from "../../../providers/BooksListProvider"
import { SearchMenu } from "../../searchMenu/SearchMenu"
import { BooksListElement } from "../../bookListElement/BooksListElement"
import { DecorationBar } from "../../decorationBar/DecorationBar"

export const BookstorePage = () => {
    return (
        <BooksListProvider>
            <SearchMenu />
            <DecorationBar />
            <BooksListElement />
        </BooksListProvider>
    )
}