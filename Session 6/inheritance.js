var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var array = [1, 2, 3, 4, 5, 6, 2, 8, 9, 2];
var Count = /** @class */ (function () {
    function Count() {
    }
    Count.prototype.Count = function () {
        console.log(array.filter(function (x) { return x === 2; }).length);
    };
    return Count;
}());
var Sum = /** @class */ (function (_super) {
    __extends(Sum, _super);
    function Sum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sum.prototype.sum = function () {
        var sum = 0, i = 0;
        for (i; i < array.length; i++) {
            sum = sum + array[i];
        }
        console.log(sum);
    };
    return Sum;
}(Count));
var obj = new Sum();
obj.sum();
obj.Count();
