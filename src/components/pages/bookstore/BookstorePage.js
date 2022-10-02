import { BooksListProvider } from "../../../providers/BooksListProvider";
import { SearchMenu } from "../../searchMenu/SearchMenu";
import { StyledBooksListElement } from "./StyledBooksListElement";
import { StyledDecorationBar } from "../../decorationBar/StyledDecorationBar";

export const BookstorePage = () => {
  return (
    <BooksListProvider>
      <SearchMenu />
      <StyledDecorationBar />
      <StyledBooksListElement />
    </BooksListProvider>
  );
};
