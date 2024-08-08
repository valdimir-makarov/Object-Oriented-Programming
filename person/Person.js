
// Symbols can also be used to create private-like properties, although they are not truly private
 const _id = Symbol("id")
 const  _name = Symbol("name");
 const _bloodGroup = Symbol ("bloodGroup");
 const _contact = Symbol("contact")
 

class Person{




    constructor(id,name){
  this[_id]=id

  this[_name]=name
  this[_bloodGroup]=null;
  this[_contact]=null;



    }


     getId(){
        return this[_id]
        
     }
     getName(){
        return this[_name]
     }
     setName(value){
      this[_name]=value

     }
     setBloodGrou(value){
      this[_bloodGroup]=value
     }
     setContact(value){
       return this[_contact]=value
      
     }
      toString(){
        console.log(`Name:${this[_name]} AND ID:${this[_id]}`)
      }
}
 const Person2 = new Person(73,"bubun")
 console.log(Person2.setContact("saidpur"));
console.log(Person2.getId())
console.log(Person2.getName())


export default Person