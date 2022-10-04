import { MessagesListProvider } from "../../../../providers/MessagesListProvider"
import { SearchMessagesMenu } from "../../../searchMenu/SearchMessagesMenu"
import { MessagesListElement } from "./MessagesListElement"

export const MessagesPage = () => {
    return (
        <MessagesListProvider>
            <SearchMessagesMenu />
            <MessagesListElement />

        </MessagesListProvider>
    )
}