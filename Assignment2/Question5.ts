// write a typescript program to which contain function named ChkString. that function accept one string and check whether that string contains "Marvellous" word or not.
// Input : "Pune Kothrud Marvellous Infosystems"
// Otput : String contains Marvellous in it.

function ChkString(inputString : string) : string 
{
    if (inputString.indexOf("Marvellous")) 
    {
        return "String contains Marvellous in it.";
    } 
    else 
    {
        return "String does not contain Marvellous.";
    }
}


var Input : string = "Pune Kothrud Marvellous Infosystems";

var  Result : string = ChkString(Input);
console.log(Result);

