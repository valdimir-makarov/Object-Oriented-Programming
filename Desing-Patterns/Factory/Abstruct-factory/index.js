"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typesOfClasses_1 = require("./typesOfClasses");
var DriverClass = /** @class */ (function () {
    function DriverClass() {
    }
    DriverClass.prototype.createDriver = function (type) {
        if (type == 'Benz') {
            return new typesOfClasses_1.Benz;
        }
        else if (type == 'buggatti') {
            return new typesOfClasses_1.Bugatti;
        }
        else {
            throw new Error;
        }
    };
    return DriverClass;
}());
var driver = new DriverClass();
var res = driver.createDriver("Benz");
var res2 = driver.createDriver("buggatti");
console.log(res2);
console.log(res);
