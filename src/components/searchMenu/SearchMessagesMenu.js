import { MessagesSearchContext } from "../../providers/MessagesSearchProvider"
import { MessagesSearchProvider } from "../../providers/MessagesSearchProvider"
import { CategoryBar } from "./searchPartComponents/CategoryBar"

export const SearchMessagesMenu = () => {
    const options = ['all', 'read', 'unread']
    return (
        <MessagesSearchProvider>
            <CategoryBar options={options} context={MessagesSearchContext} />
        </MessagesSearchProvider>
    )
}
