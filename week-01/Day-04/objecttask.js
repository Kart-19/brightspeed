/*
let show = document.getElementById("show");
let display = document.getElementById("display");

let o1 ={
    name:"Bob",
    age:10,
    city:"florida"
} 
let o2 ={
    name:"Alice",
    age:10,
    city:"florida"
} 
let o3 ={
    name:"Jacki",
    age:10,
    city:"florida"
} 

let arr = [];
arr.push(o1,o2,o3);
console.log(arr);

show.onclick = function f(){
    
    for(let i=0;i<arr.length;i++) {
        let h1 = document.createElement("h1");
        h1.innerText = arr[i].name;
        display.appendChild(h1);
        
    }
}

*/

//Form getting Data
let btn = document.getElementById("btn");

btn.onclick = function f() {
    event.preventDefault();
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    console.log(user);
    console.log(pass);
}