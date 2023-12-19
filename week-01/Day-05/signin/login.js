let check=true;
function login(){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    console.log(email,pass);
     check =true;
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        for (const i of data) {
            if((i.email == email) && i.pass == pass){
                console.log("Login Success");
                check=false
                window.location.href = "http://127.0.0.1:5500/brightspeed/week-01/Day-05/signin/dashboard.html";
                break;
            }
          
        }
        if(check){
            console.log("Login Failed");
        }
    })
    .catch(e => console.log(e))


}
/*
function f(){
let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    console.log(email,pass);

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
       console.log(data);
    })
    .catch(e => console.log(e))


}
// let check = true

if(check){
    event.preventDefault();
    f();
}
*/