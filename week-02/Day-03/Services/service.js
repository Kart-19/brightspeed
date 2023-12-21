app.service("userService",["$http",function($http){

    this.arr = [];
    this.getData = function(){
        return this.arr;
    }

    this.postData = function(data){
        this.arr.push(data);
        console.log(this.arr);
    }
}])