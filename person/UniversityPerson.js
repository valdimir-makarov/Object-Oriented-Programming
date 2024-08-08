import Person from "./Person.js"
const _dept = Symbol('dept')
const _account  = Symbol('account')


class UniversityPerson extends Person{


    constructor(account, department) {
        super(id, name);
        this[_dept] = null
        this[_account] = null
      }

      getDepartment(){
         return this[_dept]
      }
      setDepartment(value){
         this[_dept]=value
        
      }
     getAccountBalance(){
         return  this[_account]
     }
     setAccount(value){
         this[_account]=value
     }
     toString(){
         super.toString()
          console.log(`Account:${this[_account]}`)
          console.log(`Department:${this[_dept]}`)
     }
}
export default UniversityPerson