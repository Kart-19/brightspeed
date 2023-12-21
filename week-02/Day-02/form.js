var app = angular.module("myapp",[]);

var arr = [];
app.controller("signup",["$scope",(s)=>{

    s.signupData = ()=>{
    s.obj = {
        name : s.name,
        email : s.email,
        password : s.pass,
        location : s.location
    }
    arr.push(s.obj)
    console.log(arr);

  }
}]);

app.controller("login",["$scope",(s)=>{

   s.email;
   s.pass;
   var flag = true;
   s.loginData = ()=>{

       for (const i of arr) {
            if((i.email == s.email) && (i.password == s.pass)){
                    flag = false;
                    console.log("Login Success");
                    break;
            }
       }
       if(flag) console.log("Login Failed");
   }
}]);

//Main conroller
app.controller("main",["$scope",(s)=>{

    s.signup = true;
    s.switchForm = ()=>{

        if(s.signup){
            s.signup = false;
            s.login = true;
        } 
        else{
            s.signup = true;
            s.login = false;
        }
    }
}])