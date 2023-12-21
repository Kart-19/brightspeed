var app = angular.module("myapp",[]);

app.controller('toggle',["$scope",(s)=>{

        s.name = "kaka";

        s.isred = true;

        
        s.red = true;
        s.green = true;
        s.yellow = true;

        s.btn = (x)=>{

        s.red = false;
        s.green = false;
        s.yellow = false
        console.log(s.x);
        // x = false
            // console.log(s.x);
        }

        //
        s.check = false;
        s.photo = "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"

}])