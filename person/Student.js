import Person from "./Person.js";

const _course = Symbol("course");
const _roll = Symbol("roll");
const _exams =Symbol("exam")
const _fee =  Symbol("fee")
const _gaurdian = Symbol("gaurdian")
class Student extends Person {
    constructor(id, name, course, roll,exams=[],fee) {
        super(id, name);
        this[_course] = course || null;
        this[_roll] = roll || null;
        this[_exams] = exams
        this[_fee]= fee
        
    }

    getRoll() {
        return this[_roll];
    }

    setRoll(value) {
        this[_roll] = value;
    }

    getCourse() {
        return this[_course];
    }

    setCourse(value) {
        this[_course] = value;
    }
     
    setExams(value){
  this[_exams].push(value)

    }
    getExams(){
     return this[_exams]
    }
    setFee(value){
      this[_fee] =value

    }
    getFee(){
     return this[_fee]
    }
    setGaurdian(value){
 this[_gaurdian]=value
    }
    getGaurdian(){
     return this[_gaurdian]
    }

    toString() {
        super.toString();
        console.log(`Roll: ${this[_roll]}, Course: ${this[_course]}`);
         for(let i = 0;i<this[_exams].length;i++){
          console.log(`exams ${this[_exams][i]}`)
         }
         console.log(`Fee ${this[_fee]}`)
         console.log(`Gaurdians ${this[_gaurdian]}`)
    }
}

export default Student;
