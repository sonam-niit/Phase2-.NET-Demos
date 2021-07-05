class Example
{
    private _fname:string;

    //get always return a value
    get fname():string{
        return this._fname;
    }
    //always set a value
    set fname(newName:string)
    {
        if(newName.length>=4){
             this._fname=newName;
        }
        else{
            console.log("Length of name is less than 4");
        }
    }
}

let e=new Example();
e.fname='tom'; // call setter method
if(e.fname){//call getter method}
    console.log(e.fname);// call getter method
}