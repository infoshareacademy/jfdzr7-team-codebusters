import { MessagesListProvider } from "../../../../providers/MessagesListProvider"
import { StyledDecorationBar } from "../../../decorationBar/StyledDecorationBar"
import { SearchMessagesMenu } from "../../../searchMenu/SearchMessagesMenu"
import { MessagesListElement } from "./MessagesListElement"
import { MessagesMenagmentPanel } from "./MessagesMenagmentPanel"

export const MessagesPage = () => {
    return (
        <MessagesListProvider>
            <SearchMessagesMenu />
            <StyledDecorationBar />
            <MessagesMenagmentPanel />
            <MessagesListElement />
        </MessagesListProvider>
    )
}