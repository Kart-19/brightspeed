//Array 
let arr = [name,greet];
console.log(arr[0]);

//Object
let objs = {
    location:"chennai",
    state:"TamilNadu",
    zip:600002
};

console.log(objs.zip);

//Undefined
console.log(a);
var a=null;
console.log(a);


//Type Coersion
console.log(10+ +"20");

let x = {
    name:"kaka",
    age:10,
    college:"abc"
}

// for(let i of x){
//     console.log(i);
// }

for (let i in x ){
    console.log(i);
}

//Inhertiance
class plant{
   
    display(){
        console.log(this.name+" "+this.price);
    }
}

//sub class which extend the plant
class beans extends plant{
    constructor(name,price){
        super();
        this.name = name,
        this.price = price;
    }
    
}

let obj = new beans("beans",45);
let obj1 = new beans("carrot",70);
obj1.display();
obj.display();

//Polymorphism
class m1{
    show(){
        console.log("From M1 ");
    }
}

class m2 extends m1{
    show(name){
        // super();
        console.log("From M2 "+name);
    }
}

let pobj = new m2();
obj.show();

