// BEGIN
class Money {
    constructor(value, currency = 'usd') {
        this.value    = value
        this.currency = currency
    }
    getValue()           { return this.value    }
    getCurrency()        { return this.currency }
    exchangeTo(currency) {
        if (currency === this.currency) 
            return new Money(this.value, this.currency)
        else if (currency === 'usd')
            return new Money(this.value * 1.2, currency)
        else if (currency === 'eur')
            return new Money(this.value * 0.7, currency)
    }
    add(money) {
        const currency = money.getCurrency()
        if (currency === this.currency) 
            return new Money(this.value + money.getValue(),         this.currency)
        else if (currency === 'usd')
            return new Money(this.value + (money.getValue() * 0.7), this.currency)
        else if (currency === 'eur')
            return new Money(this.value + (money.getValue() * 1.2), this.currency)
    }
    format() {
        return this.value.toLocaleString(undefined,
        { style: 'currency', currency: this.currency })
    }
}

export default Money
// END
