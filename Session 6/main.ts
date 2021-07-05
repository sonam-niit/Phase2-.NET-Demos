class Adder{

    constructor(public a:number){}

        add=(b:number):number=>{
            return this.a+b;
    }
}

class Child extends Adder{
    callAdd(b:number)
    {
        return this.add(b); //calling parent class method from child
    }
}

const child=new Child(123);

console.log(child.callAdd(123));