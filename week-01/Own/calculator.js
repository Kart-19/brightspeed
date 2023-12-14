let display = document.getElementById("display");
let box = document.getElementById("box");
let bodys = document.getElementById("bodys");
let btn = document.getElementById("btn");

let s ;
function operation(op){
    s=op;
    console.log("Function "+s);
}

for(let i=1;i<10;i++){
    let p = document.createElement('p');
    p.innerText = i;
    display.appendChild(p);
    p.style.padding = "10px"

    p.onclick = function number(){
       let x =  p.value = i;
        if(s){
            console.log("Operation"+s);
        }
       console.log("Btn"+btn.value);
       console.log(x);
       box.innerText = x;
       bodys.appendChild(box);


    }
}





