/*

p.innerHTML = "Demo";
console.log("Para : "+p);
let cls = document.getElementsByClassName("sum");
console.log("Class : "+cls[0]);

let h2 = document.getElementById("h2");
console.log("Heading : "+h2);
p.style.color = "green";
cls[0].style.color = "red";
*/


//QuerySelector and QuerySelectorAll
/*
let qs = document.querySelector("p");
console.log(qs);

let qsa = document.querySelectorAll("p");
console.log(qsa);
qsa[0].innerHTML = "Bye";


//Events
let h4 = document.getElementById("eve");
let btn = document.getElementById("btn");
cgcolor = ()=>{
    h4.style.color = "blue";
}

btn.addEventListener('click',cgcolor);

*/

//value from the Input box
let p = document.getElementById("demo");
let btni = document.getElementById("btni");

print = ()=>{
    let i = document.getElementById("i").value;
    p.innerHTML = i
    console.log(i);
}
btni.addEventListener('click',print);


