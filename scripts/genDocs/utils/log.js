export default (...strings) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...strings)
    }
}
