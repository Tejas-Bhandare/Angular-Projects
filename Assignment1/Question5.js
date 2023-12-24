// Write a typescript program to which contain one Function named as fibonacci. That function accept one number from user and print fibonacci series till that num
// Input : 21
// Output : 1 1 2 3 5 8 13 21
function printFibonacci(num) {
    var fibonacciSeries = [];
    var curNum = 0;
    var preNum = 1;
    var temp = 0;
    while (curNum <= num) {
        fibonacciSeries.push(curNum);
        temp = curNum + preNum;
        preNum = curNum;
        curNum = temp;
    }
    return fibonacciSeries;
}
var No1 = 21;
console.log(printFibonacci(No1));
