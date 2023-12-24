// Write a typescript program which can contain one function named as CHkPrime. That function should accept the one number and it should return true if the given number is prime and otherwise  return false 
// Input : 11
// Output : It is Prime Number
function CHkPrime(Num1) {
    if (Num1 == 2 || Num1 == 3 || Num1 == 5 || Num1 == 7) {
        return true;
    }
    else if (Num1 % 2 == 0 || Num1 % 3 == 0 || Num1 % 5 == 0 || Num1 % 7 == 0) {
        return false;
    }
    else {
        return true;
    }
}
var No1 = 11;
var Result = CHkPrime(No1);
if (Result == true) {
    console.log("Number " + No1 + " is a Prime Number");
}
else {
    console.log("Number " + No1 + " not a Prime Number");
}
