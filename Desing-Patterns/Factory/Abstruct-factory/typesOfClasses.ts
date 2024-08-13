import { cars } from "./classes";



 export class Benz implements  cars{

 model  = 'Benz'
  name = this.model

  drive(): void {
      console.log(`${this.name}`)
  }



}
export class Bugatti implements cars {
     model  = 'Buggati'
     name: string = this.model
     drive(): void {
         console.log(`${this.name}`)
     }
}