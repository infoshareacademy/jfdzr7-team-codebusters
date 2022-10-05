import { MessagesListProvider } from "../../../../providers/MessagesListProvider"
import { SearchMessagesMenu } from "../../../searchMenu/SearchMessagesMenu"
import { MessagesListElement } from "./MessagesListElement"
import { MessagesMenagmentPanel } from "./MessagesMenagmentPanel"

export const MessagesPage = () => {
    return (
        <MessagesListProvider>
            <SearchMessagesMenu />
            <MessagesMenagmentPanel />
            <MessagesListElement />

        </MessagesListProvider>
    )
}