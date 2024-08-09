class Subject {
    constructor(credit, name) {
        this.credit = credit || 0;
        this.name = name || "";
    }

    getCredit() {
        return this.credit;
    }

    setCredit(value) {
        this.credit = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    toString() {
        console.log(`Subject: ${this.name}, Credit: ${this.credit}`);
    }
}

export default Subject;
