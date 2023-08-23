function reservedNumber(N){
    let result = ""
    for(let i = N ;i>0;i--){
        let str = ""
        for(let y = i;y>0;y--){
            str += y + " "
        }
        result += str + "\n"
    }
    return result
}
console.log(reservedNumber(5))
