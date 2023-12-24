// write a typescript program to which contain function named Maximum. that function accept array of numbers and return largest number from array as 
// Input : 23,89,6,29,56,45,77,32
// Otput : 89
function Maximum(num1) {
    var i = 0;
    var max = 0;
    for (i = 0; i < num1.length; i++) {
        if (num1[i] > max) {
            max = num1[i];
        }
    }
    return max;
}
var maxNum = 0;
var array = [23, 89, 6, 29, 56, 45, 77, 32];
maxNum = Maximum(array);
console.log("Maximum number is :" + maxNum);
