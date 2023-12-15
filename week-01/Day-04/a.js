
setTimeout(function() { myFunction("HI !"); }, 4000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

