// BEGIN
const createRationalNumber = (numer = 0, denom = 1) => {
    class ratNum {
        constructor(numer, denom) {
            this.numer = numer
            this.denom = denom
        }
        setNumer(num) { return this.numer = num }
        setDenom(num) { return this.denom = num }
        getNumer() { return this.numer }
        getDenom() { return this.denom }
        toString() { return this.numer.toString() + '/' + this.denom.toString() }
        add(rat) {
            const newRat = createRationalNumber()
            newRat.setNumer(numer * rat.getDenom() + denom * rat.getNumer())
            newRat.setDenom(denom * rat.getDenom())
            return newRat
        }
    }

    return new ratNum(numer, denom)
}

export default createRationalNumber
// END
