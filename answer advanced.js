function reservedNumber(N){
    for(let i = N ;i>0;i--){
        let str = ""
        for(let y = i;y>0;y--){
            str += y + " "
        }
        console.log(str)
    }
}
