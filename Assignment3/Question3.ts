//Create one typescript application which contains one class named as CircleX. Which will iherits above Circle class 
//In circleX class we have to one method (Behaviours) as Circumference whiich will return Circumference of circle.
//after Designing class create two objects of that class by providing some hardcoded value. Call all the methods by using both the objects.

class Circle {

    public Radius : number;
    public PI : number = 3.14;

    constructor (A : number)
    {
        this.Radius = A;
    }

    Area () : number
    {
        var Result : number = 0;
        Result = (this.Radius ** 2) * this.PI;
        return Result;    
    }
}
 
class CircleX extends Circle {
    Circumference () : number
    {
        var Result : number = 0;
        Result = 2 * this.PI * this.Radius;
        return Result;
    }
}



var obj1 = new CircleX(15);
var obj2 = new CircleX(19);

var area : number = 0;
var circumference : number = 0;
area = obj1.Area();
circumference = obj1.Circumference();
console.log("Area of circle with Radius "+obj1.Radius+" is "+area );
console.log("Circumference of circle with Radius "+obj1.Radius+" is "+circumference );

area = obj2.Area();
circumference = obj2.Circumference();
console.log("Area of circle with Radius "+obj2.Radius+" is "+area );
console.log("Circumference of circle with Radius "+obj2.Radius+" is "+circumference );
