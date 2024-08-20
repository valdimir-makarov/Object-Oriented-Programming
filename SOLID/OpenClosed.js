

class  Operation {


    

     OperationMethod(a,b){
        throw new Error("Invalid operation");

     }
}

 class Add extends Operation{

    OperationMethod(a,b){
        return a+b;

    }
 }
 class minus extends Operation{
    OperationMethod(a,b){
        return a-b;
    }
 }

 class Devide extends Operation{
    OperationMethod(a,b){
        return a/b;
    }
 }

 class SetOperation extends Operation {

     constructor(operation){
    super()
     this.operation = operation

   
     }
     execute(a,b){
         return this.operation.OperationMethod(a,b)
     }
 }


 const optAdd = new SetOperation(new Add)
const optDevidNum = new SetOperation(new Devide)
 console.log(optAdd.execute(2,3)) 
 console.log(optDevidNum.execute(20,5))