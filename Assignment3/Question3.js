//Create one typescript application which contains one class named as CircleX. Which will iherits above Circle class 
//In circleX class we have to one method (Behaviours) as Circumference whiich will return Circumference of circle.
//after Designing class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Result = 0;
        Result = 2 * this.PI * this.Radius;
        return Result;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(15);
var obj2 = new CircleX(19);
var area = 0;
var circumference = 0;
area = obj1.Area();
circumference = obj1.Circumference();
console.log("Area of circle with Radius " + obj1.Radius + " is " + area);
console.log("Circumference of circle with Radius " + obj1.Radius + " is " + circumference);
area = obj2.Area();
circumference = obj2.Circumference();
console.log("Area of circle with Radius " + obj2.Radius + " is " + area);
console.log("Circumference of circle with Radius " + obj2.Radius + " is " + circumference);
