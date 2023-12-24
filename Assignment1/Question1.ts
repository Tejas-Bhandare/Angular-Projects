// Write Typecript Program which contain one function named s Maximum. That function accespts three parameters and it should return value from three input parameters
// input : 23 89 6
// output : Maximum number is 89

function PrintMaxNumber(Num1 : number, Num2 : number, Num3 : number) : number
{
    if(Num1 > Num2 && Num1 >Num3)
    {
        return Num1;
    }
    else if(Num2 > Num1 && Num2 >Num3)
    {
        return Num2;
    }
    else
    {
        return Num3;
    }
}

var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;
var MaxNum : number = 0;

MaxNum = PrintMaxNumber(No1, No2, No3);

console.log("Maximum number is "+MaxNum)


