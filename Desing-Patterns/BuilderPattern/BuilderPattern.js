function Store() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function ComputerBuilder() {
    this.computer = null;

    this.step1 = function () {
        this.computer = new Computer();
    };

    this.step2 = function () {
        this.computer.addParts();
    };

    this.get = function () {
        return this.computer;
    };
}

function SmartphoneBuilder() {
    this.smartphone = null;

    this.step1 = function () {
        this.smartphone = new Smartphone();
    };

    this.step2 = function () {
        this.smartphone.addParts();
    };

    this.get = function () {
        return this.smartphone;
    };
}

function Computer() {
    this.components = 0;

    this.addParts = function () {
        this.components = 5;
    };

    this.describe = function () {
        console.log("I am a computer with " + this.components + " components");
    };
}

function Smartphone() {
    this.components = 0;

    this.addParts = function () {
        this.components = 3;
    };

    this.describe = function () {
        console.log("I am a smartphone with " + this.components + " components");
    };
}

function run() {
    var store = new Store();
    var computerBuilder = new ComputerBuilder();
    var smartphoneBuilder = new SmartphoneBuilder();
    var computer = store.construct(computerBuilder);
    var smartphone = store.construct(smartphoneBuilder);

    computer.describe();
    smartphone.describe();
}

run();
