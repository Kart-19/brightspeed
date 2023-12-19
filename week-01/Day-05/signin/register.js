let success = document.getElementById("success");
let form = document.getElementById("form");
function register(){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    let repass = document.getElementById('repass').value;


    fetch(" http://localhost:3000/users",{
        method :"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({name,email,pass})
    }
    ).then()
    .then(res =>{
        form.innerHTML ="";
            success.innerHTML = "Register Successfully !! It will be Redirected to Login";
            window.location.href = "http://127.0.0.1:5500/brightspeed/week-01/Day-05/signin/login.html"
    })
    .catch(e => console.log(e))
}