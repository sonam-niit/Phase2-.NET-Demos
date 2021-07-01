//Con structor : first letter constuctor is Caps
function Employee(name, designation,dateOFBirth)
{
    this.name=name;
    this.designation=designation;
    this.dateOFBirth=dateOFBirth;
}

Employee.prototype.calculateAge= function(){
    console.log("The current age of Employee is "+(2021-this.dateOFBirth))
}

console.log(Employee.prototype);

//create Object

let Emp1= new Employee('sonam','full stack developer',1989);
console.log(Emp1);
Emp1.calculateAge();
let Emp2= new Employee('Pooja','Software Trainee',1992);
console.log(Emp2);
Emp2.calculateAge();
let Emp3= new Employee('Krishna','Software Tester',1997);
console.log(Emp3);
Emp3.calculateAge();