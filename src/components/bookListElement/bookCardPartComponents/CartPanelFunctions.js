export const increaseCount = (count, setCount, quantity) => {
    if (count < quantity) {
        setCount(count + 1)
    }
}

export const decreaseCount = (count, setCount) => {
    if (count > 0) {
        setCount(count - 1)
    }
}

export const handleCounterClickButton = (event, cb, count, setCount, quantity) => {
    event.preventDefault()
    cb(count, setCount, quantity)
}