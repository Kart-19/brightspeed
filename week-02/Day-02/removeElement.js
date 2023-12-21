var app = angular.module("myapp",[]);

app.controller("removeCtrl",["$scope",function(scope){

    scope.arr = ["a","b","c","d"];

    scope.show = function fn(val){
        // console.log(val);
        let index = scope.arr.indexOf(val);
        // console.log(index);
        scope.arr.splice(index,1);
    }
}])