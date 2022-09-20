export const deboubceQuery = (query, wait) => {
    let timeout
    return searchTerm => {
        const delay = () => {
            clearTimeout(timeout)
            query(searchTerm)
        }
        clearTimeout(timeout)
        timeout = setTimeout(delay, wait)
    }
}