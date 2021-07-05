var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        //return old instance only rather than creating new instance everytime
        //if old instacne is not available then only it will create new Instance and return the same
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            Singleton.instance._tempreture = 0;
        }
        return Singleton.instance;
    };
    Singleton.prototype.getTempreture = function () {
        return this._tempreture;
    };
    Singleton.prototype.setTempreture = function (score) {
        this._tempreture = score;
        return true;
    };
    Singleton.prototype.increaseTempreture = function () {
        return this._tempreture += 1;
    };
    Singleton.prototype.decreaseTempreture = function () {
        return this._tempreture -= 1;
    };
    return Singleton;
}());
var myInstance = Singleton.getInstance();
console.log(myInstance.setTempreture(25));
console.log(myInstance.increaseTempreture());
console.log(myInstance.increaseTempreture());
console.log(myInstance.decreaseTempreture());
