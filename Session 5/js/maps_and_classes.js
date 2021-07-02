var map1=new Map();
map1.set("first name","Alex");
map1.set("last name","joseph");
map1.set("friend 1","user1");
map1.set("friend 2","user 2");

console.log(map1);
console.log("Check map has friend 3? "+map1.has("friend 3"));
console.log("get value of friend 2 "+map1.get("friend 2"));
console.log("delete using key "+map1.delete("friend 1"));

console.log("after deleting friend 1 ");console.log(map1);
map1.clear();
console.log("After clear: ");console.log(map1);

class Student
{
    constructor(id,name)
    {
        this.id=id;
        this.name=name;
    }
    detail()
    {
        document.writeln("User Id: "+this.id+"<br>User Name: "+this.name+"<br>");
    }
}
var s1=new Student(101,"Michel");
var s2=new Student(102,"Bobb");
s1.detail();
s2.detail();
