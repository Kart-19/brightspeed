var app = angular.module("myapp",[]);

app.controller("oper",["$scope",function(s){

    s.add = ()=>{
        console.log(parseInt(s.a) + parseInt(s.b));
    }
    s.sub = ()=>{
        console.log(s.a-s.b);
    }
    s.mul = ()=>{
        console.log(s.a*s.b);
    }
    s.div = ()=>{
        console.log(s.a/s.b);
    }
}])