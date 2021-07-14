const CheckIfInputIsValid = (value:string, percentage:string) => {
    return Number(value) > 0  && Number(percentage) >= 0
}

const ReturnFormattedNumber = (text:string) => {
    return Number(text).toFixed(2) !== "0.00" ? Number(text).toFixed(2) : "" 
}

const ReturnFormattedPercentage = (text:string) => {
    if(Number(text) >= 0) return Number(text).toFixed(2)
    return ""
}

const ReturnPositive = (text:string) =>{
    return Number(text) >= 0 ? text : - text
}

const ReturnValidPercentage = (text: string) => {
    var number = ReturnPositive(text)
    if (Number(number) >= 10000) return "9999"
    return number
}
export { CheckIfInputIsValid, ReturnFormattedPercentage, ReturnPositive, ReturnFormattedNumber, ReturnValidPercentage }
