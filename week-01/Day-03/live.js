// class Person{
//     name = "abc";
//     age = 10;
// }

// p = new Person();
// console.log(p.name);

class Method{
    display(a){
        console.log("Parent");
    }
}

class ex extends Method{

    constructor(){
        super();
    }
    display(){
        console.log("Child");
    }
}

let obj = new ex()
obj.display(10); 