let currencyValue= new Object;
function CurrencyConvert(amount){
     currencyValue={
        USD: (amount*0.012).toFixed(2),
        British_pounds : (amount*0.0093).toFixed(2),
        Australian_dollars :(amount*0.019).toFixed(2),
        Mexican_pesos :(amount*0.24).toFixed(2)
    }
}
CurrencyConvert(12)
let {USD,British_pounds,Australian_dollars,Mexican_pesos} =currencyValue;
console.log("USD: "+USD);
console.log("British_pounds: "+ British_pounds)
console.log("Australian_dollars: "+Australian_dollars)
console.log("Mexican_pesos: "+Mexican_pesos)