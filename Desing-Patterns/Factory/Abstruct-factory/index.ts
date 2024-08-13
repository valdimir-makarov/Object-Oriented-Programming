import { cars } from "./classes";
import { Benz, Bugatti } from "./typesOfClasses";

class DriverClass {


    createDriver(type:string):cars{



if(type=='Benz'){
     return new Benz

}
else if(type=='buggatti'){
    return new Bugatti
}
else{
    throw new Error
}

    }
}
const driver  = new DriverClass()
const res=   driver.createDriver("Benz")
const  res2 = driver.createDriver("buggatti")
console.log(res2)

console.log(res)
