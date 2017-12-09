var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @Class Animal - Base class with constructor and behaviour move,makeSound
var Animal = /** @class */ (function () {
    function Animal(name, distance) {
    }
    Animal.prototype.move = function (distance) { };
    ;
    Animal.prototype.makeSound = function () { };
    ;
    return Animal;
}());
// @Class Tiger - Child class
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.move = function (distance) {
        console.log("Tiger moves " + distance + " speed");
    };
    ;
    Tiger.prototype.makeSound = function () {
        console.log("Tiger roars");
    };
    ;
    return Tiger;
}(Animal));
// @Class Cat - Child class
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.move = function (distance) {
        console.log("cat runs " + distance + " fast");
    };
    ;
    Cat.prototype.makeSound = function () {
        console.log("Meoww");
    };
    ;
    return Cat;
}(Animal));
var a = new Cat("cat", 10);
a.makeSound();
a.move(50);
var b = new Tiger("Tiger", 100);
b.makeSound();
b.move(150);
