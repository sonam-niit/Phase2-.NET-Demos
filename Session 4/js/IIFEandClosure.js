//IIFC
const empId= (function(){
    let count=0;
    return function()
    {
        ++count;
        return `emp${count}`;
    };
})();

console.log("Employee List");
console.log("User 1"+empId());
console.log("User 2"+empId());
console.log("User 3"+empId());

//callbacks

function fullName(firstName,lastName,callback)
{
    console.log("\nMy Name is "+firstName+ " "+lastName);
    callback(lastName);
}
var greetings = function(x){
    console.log("Welcome "+x+"\n");
}

fullName("sonam","soni",greetings);
fullName("Annie","Johnson",greetings);
fullName("Joymen","Anson",greetings);