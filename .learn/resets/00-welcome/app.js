let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollartoYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 156.50
    return valueinYen
    
}


const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar

}
const fromYenToPound  = (valueInYen) => {
    let valueinPound = valueInYen * .87;
    return valueinPound

}

module.exports = {
    fromDollartoYen,
    fromEuroToDollar, 
    fromYenToPound
};









