import { Wrapper } from "./searchPartComponents/searchPartComponents.styled"
import { SearchBar } from "./searchPartComponents/SearchBar"
import { PriceBar } from "./searchPartComponents/PriceBar"
import { SortBar } from "./searchPartComponents/SortBar"
import { CategoryBar } from "./searchPartComponents/CategoryBar"
import { categoriesOfBooks } from "../../utils/categoriesOfBooks"
import { QuantityBar } from "./searchPartComponents/QuantityBar"
import { WarehouseSearchProvider, WarehouseSearchContext } from "../../providers/WarehouseSearchProvider"
import { sortWarehouseOptions } from "./searchPartComponents/utils/constans"

export const SearchWarehouseMenu = () => {
    return (
        <WarehouseSearchProvider>
            <form>
                <CategoryBar options={categoriesOfBooks} context={WarehouseSearchContext} />
                <Wrapper>
                    <SortBar sortOptions={sortWarehouseOptions} context={WarehouseSearchContext} />
                    <PriceBar context={WarehouseSearchContext} />
                    <QuantityBar context={WarehouseSearchContext} />
                    <SearchBar context={WarehouseSearchContext} />
                </Wrapper>
            </form>
        </WarehouseSearchProvider>
    )
}