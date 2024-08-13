"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bugatti = exports.Benz = void 0;
var Benz = /** @class */ (function () {
    function Benz() {
        this.model = 'Benz';
        this.name = this.model;
    }
    Benz.prototype.drive = function () {
        console.log("".concat(this.name));
    };
    return Benz;
}());
exports.Benz = Benz;
var Bugatti = /** @class */ (function () {
    function Bugatti() {
        this.model = 'Buggati';
        this.name = this.model;
    }
    Bugatti.prototype.drive = function () {
        console.log("".concat(this.name));
    };
    return Bugatti;
}());
exports.Bugatti = Bugatti;
