//Arrays Methods
/*
let arr = ['a','b','c',11,22,33];

//Iterating over array for each
// arr.forEach((e,i)=>{
//     console.log(e);
//     console.log("Index "+i);
// })


//Push & Pop

arr.push(44);
console.log(arr);
arr.pop();
console.log(arr);

//toString()
let str = arr.toString();
console.log("String "+str);

//Shift & UnShift
arr.shift();
console.log(arr);
arr.unshift('z');
console.log(arr);

//Delete elements in a array
delete arr[1];
console.log(arr);

//Concat array
let a = ['a','b','c'];
let z = ['z','y','x'];
console.log("Concat"+a.concat(z));

//Splice
a.splice(0,1);
console.log("splice "+a);

//Slice
let zz = z.slice(1);
console.log("ZZ  "+zz);
console.log("from z :"+z);

*/
/*

o1 = {
    name:'a',
    age:10
}
o2 = {
    name:'b',
    age:15
}
o3 = {
    name:'c',
    age:20
}
o4 = {
    name:'d',
    age:25
}


let person=[];
person.push(o1,o2,o3,o4);
console.log(person);

let newarr = person.filter((e,i,arr)=>{
    return arr[i].age %2 ==0
});
console.log(newarr);


*/

p1 = {
    prod:"mobiles",
    name:"nokia",
    price:1000
}
p2 = {
    prod:"laptops",
    name:"lenova",
    price:2000
}
p3 = {
    prod:"airpods",
    name:"jbl",
    price:3000
}

let product = [];
product.push(p1,p2,p3);

// console.log(product);

/*
let newprod = product.map((e,i,arr)=>{
     arr[i].price = arr[i].price - (arr[i].price * 5/100);
     return arr[i];
});
console.log(newprod); 
*/


let sum = product.reduce((ac,e)=>{

    return ac+e.price;
},0);
console.log(sum);