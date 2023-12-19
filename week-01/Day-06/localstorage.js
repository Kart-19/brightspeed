

function login(){
    let email = document.getElementById("email").value;
let pass= document.getElementById("pass").value;
    event.preventDefault();
    localStorage.setItem("email",email);
    localStorage.setItem("pass",pass);
    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("pass"));

    window.location.href = "./dashboard.html";
}