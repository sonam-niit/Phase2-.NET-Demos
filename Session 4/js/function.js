var x= (4*5) +8;//28
var y= 2*5;//10

var result=myFunction(x,y);
console.log(result);

function myFunction(num1,num2)
{
    var a=num1*num2; //6 
    var b=num1+num2;//5

    return a+b;
}

console.log(myFunction(2,3));

function toCelcius(f)
{
    return (5/9) * (f-32);
}

console.log("The temprature is "+toCelcius(60));

function cube(x){return x*x*x};
var ask=prompt("enter any number")
console.log("cube of "+ask+ " is "+cube(ask));
