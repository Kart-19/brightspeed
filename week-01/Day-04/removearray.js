let display = document.getElementById("display");
let name = ['bob','alice','john','mathew'];
let p;

function s(){
    for(let i=0;i<name.length;i++){
         p = document.createElement('li');
        p.innerHTML = name[i];
        display.appendChild(p);
         c(i);
    }
}

function c(val){
    p.onclick = function f(){
            name.splice(val,1);
            display.innerText="";
            
        s();
   }
 
}
s();