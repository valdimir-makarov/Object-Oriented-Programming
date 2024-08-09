import Subject from "./Subject";

const _passmark = Symbol("passmark");

class Exam extends Subject {
    constructor(name, credit, passmark) {
        super(name, credit);
        this[_passmark] = passmark || 0;
    }

    getPassmark() {
        return this[_passmark];
    }

    setPassmark(value) {
        this[_passmark] = value;
    }

    toString() {
        return `Exam: ${this.name}, Credit: ${this.credit}, Passmark: ${this[_passmark]}`;
    }
}

export default Exam;
