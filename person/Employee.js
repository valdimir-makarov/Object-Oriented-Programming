import Person from "./Person";

const _salary = Symbol("salary");

class Employee extends Person {
    constructor(id, name, salary) {
        super(id, name);
        this[_salary] = salary || null;
    }

    getSalary() {
        return this[_salary];
    }

    setSalary(value) {
        this[_salary] = value;
    }

    toString() {
        super.toString();
        console.log(`Salary: ${this[_salary]}`);
    }
}

export default Employee;
