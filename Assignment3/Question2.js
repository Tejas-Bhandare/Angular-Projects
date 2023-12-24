//Create one typescript application which contains one class named as Circle .
//Circle class contain two charateristics(Class data member) as Radius and PI.
// Create one parameterised  constructor which willl accept one value and assign it to radius. value of PI member is set to 3.14.
//In circle class we have to one method (Behaviours) as Area whiich will return area of circle.
//after Designing class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.
var Circle = /** @class */ (function () {
    function Circle(A) {
        this.PI = 3.14;
        this.Radius = A;
    }
    Circle.prototype.Area = function () {
        var Result = 0;
        Result = (Math.pow(this.Radius, 2)) * this.PI;
        return Result;
    };
    return Circle;
}());
var obj1 = new Circle(15);
var obj2 = new Circle(19);
var area = 0;
area = obj1.Area();
console.log("Area of circle with Radius " + obj1.Radius + " is " + area);
area = obj2.Area();
console.log("Area of circle with Radius " + obj2.Radius + " is " + area);
