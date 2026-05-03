// BEGIN
const magic = (...firstArgs) => {
    if (firstArgs.length === 0) return 0

    const initialSum = firstArgs.reduce( (sum, value) => sum + value, 0 )
    
    const func = (...args) => {
        if (args.length === 0) return 0
        const sum = args.reduce( (sum, value) => sum + value, 0 )
        const fullSum = initialSum + sum
        return magic(fullSum)
    }

    func.valueOf = () => initialSum
    return func
} 

export default magic
// END
