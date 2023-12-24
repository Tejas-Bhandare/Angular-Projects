// Create one typeScript application which contains one class named as Arithmetic. Arithmetic class contains three characteristics (Class data members) as Number1,Number2. Create one parameterised constructor which accept two values and assign it to Number1 and Number2.
//In arithmetic class we have to write four methods as Addition, Substraction, Multiplication, Division.
//Adddition will add Number1, Number2 and return result
//Substraction will substract Number1, Number2 and return result
//Multiplication will multiply Number1, Number2 and return result
//Division will divide Number1, Number2 and return result
//after Designing class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.
var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(20, 10);
var obj2 = new Arithmetic(40, 20);
var Result = 0;
Result = obj1.Addition();
console.log("Addition of " + obj1.Number1 + " and " + obj1.Number2 + " is " + Result);
Result = obj1.Substraction();
console.log("Substraction of " + obj1.Number1 + " and " + obj1.Number2 + " is " + Result);
Result = obj1.Multiplication();
console.log("Multiplication of " + obj1.Number1 + " and " + obj1.Number2 + " is " + Result);
Result = obj1.Division();
console.log("Division of " + obj1.Number1 + " and " + obj1.Number2 + " is " + Result);
Result = obj2.Addition();
console.log("Addition of " + obj2.Number1 + " and " + obj2.Number2 + " is " + Result);
Result = obj2.Substraction();
console.log("Substraction of " + obj2.Number1 + " and " + obj2.Number2 + " is " + Result);
Result = obj2.Multiplication();
console.log("Multiplication of " + obj2.Number1 + " and " + obj2.Number2 + " is " + Result);
Result = obj2.Division();
console.log("Division of " + obj2.Number1 + " and " + obj2.Number2 + " is " + Result);
