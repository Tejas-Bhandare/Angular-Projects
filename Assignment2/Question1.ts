// write a typescript program to which contain function named Maximum. that function accept array of numbers and return largest number from array as 
// Input : 23,89,6,29,56,45,77,32
// Otput : 89

function Maximum(num1 : number[]) : number
{
    var i : number = 0;
    var max :number = 0;

    for(i = 0; i < num1.length; i++)
    {
        if(num1[i] > max)
        {
            max = num1[i];
        }
    }
    return max;
}

var maxNum : number = 0;
var array : number [] = [23,89,6,29,56,45,77,32];

maxNum = Maximum(array);
console.log("Maximum number is :"+maxNum);