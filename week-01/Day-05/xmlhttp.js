//display
let display = document.getElementById("display");
let task = document.getElementById("task");

// Getting the button id
var todo = document.getElementById("todo");
var done = document.getElementById("done"); 
var data;
let http = new XMLHttpRequest();

http.open("GET","https://jsonplaceholder.typicode.com/todos",true);
http.send();

http.onreadystatechange = ()=>{
    if (http.readyState === 4 && http.status === 200) {
       
        var respon = http.responseText;
         data = JSON.parse(respon);
        console.log(data[1]);
    
    }
}

function donefun(){
    display.innerHTML="";
    task.innerText ="Tasks that are Done :) ";
    for (const i of data) {
        if(i.completed == true){
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let hr = document.createElement('hr');
            h3.innerText = `Task Id: ${i.id}`;
            p.innerText =`Task : ${i.title}`;
            display.style.backgroundColor = "lightcyan";
            display.appendChild(h3);
            display.appendChild(p);
            display.appendChild(hr);
        }
    }
}




function todofun(){
    display.innerHTML="";
    task.innerText ="Tasks to be Done :( "
    for (const i of data) {
        if(i.completed == false){
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let hr = document.createElement('hr');
            h3.innerText = `Task Id: ${i.id}`;
            display.style.backgroundColor = "lightcoral";
            p.innerText =`Task : ${i.title}`;

            display.appendChild(h3);
            display.appendChild(p);
            display.appendChild(hr);
        }
    }
}
done.addEventListener('click',donefun);
todo.addEventListener('click',todofun)