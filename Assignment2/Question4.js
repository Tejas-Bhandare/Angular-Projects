var ChkArmstrong = function (No1) {
    var str = "";
    var length = 0;
    str = String(No1);
    length = str.length;
    var sum = str
        .split('')
        .map(function (digit) { return Number(digit); })
        .reduce(function (accumulator, current) { return accumulator + Math.pow(current, length); }, 0);
    return sum === No1;
};
var Num1 = 153;
var Result = false;
Result = ChkArmstrong(Num1);
if (Result == true) {
    console.log(Num1 + " is an Armstrong number ");
}
else {
    console.log(Num1 + " is not an Armstrong number ");
}
