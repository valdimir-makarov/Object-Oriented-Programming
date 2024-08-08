
const _income = Symbol('income')
const _profession= Symbol('profession')
class Gaurdian extends Person{



    constructor(name,profession,income){
        super(name,id)
        this[_profession]=profession
        this[_income]=income

    }

     getProfession(){
         return this[_profession]
     }
     getIncome(){
 return  this[_income]
     }



     setIncome(value){
        this[_income] =value
     }
     setProfession(value){
         this[_profession] = value
     }
     toString(){
        console.log(`Profession:${this[_profession]}`)
        console.log(`income ${this[_income]}`)
     }
     
}
export default Gaurdian