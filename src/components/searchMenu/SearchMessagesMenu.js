import { MessagesSearchContext } from "../../providers/MessagesSearchProvider"
import { MessagesSearchProvider } from "../../providers/MessagesSearchProvider"
import { StyledCategoryBar } from "./searchPartComponents/StyledCategoryBar"

export const SearchMessagesMenu = () => {
    const options = ['all', 'read', 'unread']
    return (
        <MessagesSearchProvider>
            <StyledCategoryBar options={options} context={MessagesSearchContext} />

        </MessagesSearchProvider>
    )
}
