class Circle{
    static pi:number=3.14;//initilization of static variable happens once 
    static calculateArea(radius:number){
        return this.pi*radius*radius;
    }

    static calculateCircumference(radius:number)
    {
        return 2*this.pi*radius;
    }
}
//to call static methods no need to create object
//you can call static methods directly with class name
console.log(Circle.calculateCircumference(5));
console.log(Circle.calculateArea(5));