// write a typescript program to which contain function named Maximum. that function accept array of numbers and return largest number from array as 
// Input : 23,89,6,29,56,45,77,32
// Otput : 89
function Maximum(num1) {
    var i = 0;
    var j = 0;
    var firstMax = 0;
    var secondMax = 0;
    for (i = 0; i < num1.length; i++) {
        if (num1[i] > firstMax) {
            firstMax = num1[i];
        }
        else if (num1[i] > secondMax) {
            secondMax = num1[i];
        }
    }
    return secondMax;
}
var secondMaxNum = 0;
var array = [23, 89, 6, 29, 56, 45, 77, 32];
secondMaxNum = Maximum(array);
console.log("Maximum number is :" + secondMaxNum);
