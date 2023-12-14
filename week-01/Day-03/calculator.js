let n1 = parseInt(prompt("Enter the value 1 ?"));
let n2 = parseInt(prompt("Enter the value 2 ?"));
let operation = prompt("Which Operation do want to Perform ?");


//Arrow Functino
var add = (x,y)=> x+y;
var sub = (x,y)=> x-y;

switch(operation){
    case "+":{
       alert("The Sum of Values "+add(n1,n2));
    }

    case "-":{
        alert("The Subraction of Values "+sub(n1,n2));
    }
}


