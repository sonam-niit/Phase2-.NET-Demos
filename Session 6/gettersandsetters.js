var Example = /** @class */ (function () {
    function Example() {
    }
    Object.defineProperty(Example.prototype, "fname", {
        //get always return a value
        get: function () {
            return this._fname;
        },
        //always set a value
        set: function (newName) {
            if (newName.length >= 4) {
                this._fname = newName;
            }
            else {
                console.log("Length of name is less than 4");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Example;
}());
var e = new Example();
e.fname = 'tom'; // call setter method
if (e.fname) { //call getter method}
    console.log(e.fname); // call getter method
}
