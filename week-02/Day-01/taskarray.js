var app = angular.module("myapp",[]);

app.controller("arr",["$scope",function(s){

    s.name = "abc";
    s.alpha=['a','b','c','d','e'];

    s.obj = {
        name:"kaka",
        age:10
    }

    s.print = ()=>{
        console.log("Hi");
    }

    s.getData = ()=>{
        console.log(s.email);
    }
   
}])
