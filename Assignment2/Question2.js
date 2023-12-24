// write a typescript program to which contain function named Summation. that function accept array of numbers and return summation of each number from array 
// Input : 23,6,7,4,5,7
// Output : Addition is 52
function Summation(num1) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < num1.length; i++) {
        sum = sum + num1[i];
    }
    return sum;
}
var Additon = 0;
var array = [23, 6, 7, 4, 5, 7];
Additon = Summation(array);
console.log("Addition of all numbers is :" + Additon);
