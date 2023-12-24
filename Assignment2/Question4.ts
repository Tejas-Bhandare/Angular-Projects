var ChkArmstrong = (No1: number): boolean => {
    var str: string = "";
    var length: number = 0;

    str = String(No1);
    length = str.length;

    var sum = str
        .split('')
        .map(digit => Number(digit))
        .reduce((accumulator, current) => accumulator + Math.pow(current, length), 0);
    return sum === No1;
};

var Num1: number = 153;
var Result: boolean = false;
Result = ChkArmstrong(Num1);

if (Result == true) 
{
    console.log(Num1 + " is an Armstrong number ");
} 
else 
{
    console.log(Num1 + " is not an Armstrong number ");
}
