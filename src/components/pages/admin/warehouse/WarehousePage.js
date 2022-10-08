import { DecorationBar } from "../../../decorationBar/DecorationBar"
import { SearchWarehouseMenu } from "../../../searchMenu/SearchWarehouseMenu"
import { WarehouseBooksElement } from "./WarehouseBooksElement"
import { BooksListProvider } from "../../../../providers/BooksListProvider"

export const Warehouse = () => {

    return (
        <BooksListProvider>
            <SearchWarehouseMenu />
            <DecorationBar />
            <WarehouseBooksElement />
        </BooksListProvider>
    )
}