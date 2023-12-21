app.controller('postCtrl',["$scope","userService",function($scope,userService){


    $scope.postData = function(){

        $scope.obj= {
            name:$scope.name,
            email : $scope.email,
            password:$scope.pass
        }

        userService.postData($scope.obj);


           
    }
}])