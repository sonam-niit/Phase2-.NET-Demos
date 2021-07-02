//Arrow Function
var add=(a,b)=>{
    return a+b;
}

var sub=(a,b)=>{
    return a-b;
}
//function as an argument
var data=(func)=>{
    var num1=10;
    var num2=20;
    return func(num1,num2);
}

console.log("calling Addition function "+data(add));
console.log("calliong subtraction function "+data(sub));

//function returning a function

const multi=(integer)=>(anotherInteger)=>integer*anotherInteger;
const div=(integer)=>(anotherInteger)=>integer/anotherInteger;

const res1= multi(10)(20);
const res2=div(30)(6);

console.log("Result of Multiplication "+res1);
console.log("Result of Division "+res2);
//String Function Demo
var x="Hello World";
console.log("Character At Index 3 "+x.charAt(3));
console.log("\nUpperCase: "+x.toUpperCase());
console.log("\nLength : "+x.length)