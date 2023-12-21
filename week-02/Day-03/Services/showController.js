var app = angular.module("myapp",[]);

app.controller('showCtrl',["$scope","userService",function($scope,userService){


    $scope.showData = function(){
        $scope.response = userService.getData();

        // return $scope.response
           
    }
}])
