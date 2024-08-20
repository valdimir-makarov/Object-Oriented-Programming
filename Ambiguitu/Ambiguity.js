

class fly{

swim(){

    console.log("can fly")
}

}

class swim{


 fly()
{
console.log("can swim")

}

}

class Duck{

constructor(){

    this.fly = new fly()
    this.swim  = new swim()
}



}

const duck  = new Duck()

duck.fly.swim()
