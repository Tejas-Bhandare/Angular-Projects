//Write a typeScript which comtain one function named as Area. That function should return the calculated area of circle. Accept value of radius from user and retun its Area. Defaullt value of PI should be 3.14.
// input : 5
// Output : Area of circle is 78.5

function CalculateArea (Radius : number) : number
{
    var PI : number = 3.14;
    var Area = PI*(Radius*Radius);
    return Area;
}

var CircleRadius : number = 5;
var CircleArea : number = CalculateArea(CircleRadius);

console.log("Area of circle is "+CircleArea);