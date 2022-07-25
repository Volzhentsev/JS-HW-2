function simpleNum(n) {

    let result = []
    let num = 1

    while (result.length < n) {
        ++num

        let div = 1
        do {
            ++div
        } while (num % div != 0) 

        if (num == div) {
            result.push(num)
        }
    }

    return result
}

console.time()
console.log(simpleNum(process.argv[2]))
console.timeEnd()