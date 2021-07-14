const CheckIfInputIsValid = (value:string, percentage:string) => {
    if(value.startsWith("--") || percentage.startsWith("--")) return false
    return Number(value) > 0.009   && Number(percentage) >= 0
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

const ReturnValidPercentage = (text:string) => {
    if(Number(text) < 0 ) return ""
    if(Number(text) >= 10000) return "9999"
    return text
}
export { CheckIfInputIsValid, ReturnFormattedPercentage, ReturnPositive, ReturnFormattedNumber, ReturnValidPercentage }
