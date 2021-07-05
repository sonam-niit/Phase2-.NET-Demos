class Singleton{
    private static instance:Singleton;
    private _tempreture:number;

    private constructor(){

    }
    static getInstance()
    {
        //return old instance only rather than creating new instance everytime
        //if old instacne is not available then only it will create new Instance and return the same
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
            Singleton.instance._tempreture=0;
        }
        return Singleton.instance;
    }
    getTempreture():number{
        return this._tempreture;
    }
    setTempreture(score):boolean{
        this._tempreture=score;
        return true;
    }
    increaseTempreture():number{
        return this._tempreture+=1;
    }
    decreaseTempreture():number{
        return this._tempreture-=1;
    }
}
const myInstance=Singleton.getInstance();
console.log(myInstance.setTempreture(25));
console.log(myInstance.increaseTempreture());
console.log(myInstance.increaseTempreture());
console.log(myInstance.decreaseTempreture());