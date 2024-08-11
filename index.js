import Gaurdian from "./person/Gaurdian.js"

import Student from "./person/Student.js"
const gaurdian = new Gaurdian('bubun',"doctor",1000000,1)

const student  = new Student(1,"guru",["phy","math"])
console.log(student.toString())
console.log(gaurdian.toString())