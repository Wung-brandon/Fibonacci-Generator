var series = document.getElementById("series")

function fibonacciGenerator(n){
    var fibSeries = [0, 1]
    for (var i = 2; i < n; i++){
        var series = document.getElementById("series")
        var nextNumber = fibSeries[i - 1] + fibSeries[i - 2]
        fibSeries.push(nextNumber)
        series.innerHTML = `The fibonacci series for ${n} is ${fibSeries}`
    }
    return fibSeries

}

var series = fibonacciGenerator(7)
console.log(series)


// OR SECOND METHOD
// function fibonacci(n){
//     var output = [];
//     if (n == 1){
//         output = [0];
//     }
//     else if (n == 2){
//         output = [0, 1];
//     }
//     else{
//         output = [0, 1]
//         for(let i = 2; i < n; i++){
//             output.push(output[output.length - 2] + output[output.length - 1])
//         }
//     }
//     return output
// }

// var secondSeries = fibonacci(1)
// console.log(secondSeries)