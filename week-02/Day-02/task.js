var app = angular.module("myapp",[]);
app.controller('taskctrl',["$scope",(s)=>{
    s.n = "Hi";
    s.change = ()=>{
        s.col = "red";
        s.bg = "black";
    }

    s.log = 1;
    s.sign = 0;
    s.toogle = ()=>{
        if(s.log){
            s.log = 0;
            s.sign=1
        }
        else{
            s.log = 1;
            s.sign=0
        } 
    }

    s.arr = [
        {name:'a',country:"india"},
        {name:'b',country:"denmark"},
        {name:'c',country:"spain"},
        {name:'d',country:"france"},
        {name:'e',country:"srilanka"},
        {name:'f',country:"australia"},


        s.getData = ()=>{
            s.obj = {
                name : s.name,
                email : s.email,
                password : s.password,
                location : s.location
            }
            console.log(s.obj);
        }

    ]
}])