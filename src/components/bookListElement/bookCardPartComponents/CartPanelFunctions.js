const increaseCount = (count, setCount, quantity) => {
    if (count < quantity) {
        setCount(count + 1)
    }
}

const decreaseCount = (count, setCount) => {
    if (count !== 0) {
        setCount(count - 1)
    }
}

export { increaseCount, decreaseCount }