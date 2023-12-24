// Write a typescript program which contain one function nmaed DisplayFactors. That function should accept one number and it should return factors of that number
// input : 20;
// Output : 1,2,4,5,10

function DisplayFactors (Num1 : number) : number[]
{
    var CurNum : number = 1;
    var Factors : number [] = [];

    while(CurNum < Num1)
    {
        if(Num1 % CurNum == 0)
        {
            Factors.push(CurNum);
        }
        CurNum++;
    }

    return Factors;
}

var No1 : number = 20;
console.log(DisplayFactors(No1));
