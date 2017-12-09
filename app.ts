// @Class Animal - Base class with constructor and behaviour move,makeSound
class Animal{

    constructor(name:string, distance:number){
    }
    move(distance){};
    makeSound(){};
}

// @Class Tiger - Child class
class Tiger extends Animal {
  
    move(distance){
        console.log(`Tiger moves ${distance} speed`);
    };
    makeSound(){
        console.log("Tiger roars");
    };
}

// @Class Cat - Child class
class Cat extends Animal {

    move(distance){
        console.log(`cat runs ${distance} fast`);
    };
    makeSound(){
        console.log("Meoww");
    };
}


let a = new Cat("cat",10);
a.makeSound();
a.move(50);
let b = new Tiger("Tiger",100);
b.makeSound();
b.move(150);
