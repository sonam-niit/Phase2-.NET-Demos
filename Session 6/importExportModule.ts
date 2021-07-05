export let age:number=20;
export class Employee
{
    empCode:number;
    empName:string;
    constructor(name:string,code:number)
    {
        this.empCode=code;
        this.empName=name;
    }
    displayEmployee()
    {
        console.log("Employee Code: "+this.empCode+" Employee Name: "+this.empName);
    }
}