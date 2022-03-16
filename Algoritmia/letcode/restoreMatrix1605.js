var restoreMatrix = function(rowSum,colSum){
    const result = []
    for(let r = 0; r < rowSum.length; r++){
        result.push([])
        for(let c = 0; c < colSum.length; c++ ){
            const min = Math.min(rowSum[r], colSum[c])
            result[r][c] = min
            rowSum[r] -= min
            colSum[c] -= min
        }
    }
    return result
}

rowSum = [5,7,10]
colSum = [8,6,8]

console.log(restoreMatrix(rowSum,colSum));

/* Answer
5 0 0
3 4 0
0 2 8
*/