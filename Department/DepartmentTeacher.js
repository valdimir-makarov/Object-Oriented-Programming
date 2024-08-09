const _departmentName = Symbol("departmentName");
const _location = Symbol("location");
const _employees = Symbol("employees");

class DepartmentTeacher {
    constructor(departmentName, location) {
        this[_departmentName] = departmentName || null;
        this[_location] = location || null;
        this[_employees] = [];
    }

    getDepartmentName() {
        return this[_departmentName];
    }

    setDepartmentName(value) {
        this[_departmentName] = value;
    }

    getLocation() {
        return this[_location];
    }

    setLocation(value) {
        this[_location] = value;
    }

    addEmployee(employee) {
        this[_employees].push(employee);
    }

    removeEmployee(employeeId) {
        this[_employees] = this[_employees].filter(emp => emp.getId() !== employeeId);
    }

    getEmployees() {
        return this[_employees];
    }

    toString() {
        console.log(`Department: ${this[_departmentName]}, Location: ${this[_location]}`);
        console.log("Employees:");
        this[_employees].forEach(employee => employee.toString());
    }
}

export default DepartmentTeacher;
