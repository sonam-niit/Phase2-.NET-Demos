var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.calculateCircumference = function (radius) {
        return 2 * this.pi & radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
//to call static methods no need to create object
//you can call static methods directly with class name
console.log(Circle.calculateCircumference(5));
console.log(Circle.calculateArea(5));
