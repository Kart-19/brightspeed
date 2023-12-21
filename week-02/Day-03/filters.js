var app = angular.module("myapp",[]);

app.controller('fillCtrl',["$scope","$filter",function($scope,$filter){
    $scope.msg = "Hello"

    //Search for names array
    $scope.arr = ["kaka","bob","alice","mathew","jenni","mary"];

    $scope.arrobj = [

        {name:"bob",age:10,location:"noida",doj:'2000-01-11'},
        {name:"alice",age:20,location:"chennai",doj:'2010-11-01'},
        {name:"mathew",age:15,location:"delhi",doj:'2001-01-22'},
        {name:"jacki",age:50,location:"bihar",doj:'2009-12-30'},
        {name:"jenni",age:15,location:"chennai",doj:'2007-02-21'},
        {name:"mary",age:25,location:"kerela",doj:'2006-02-21'},
        {name:"peter",age:30,location:"punjab",doj:'2001-02-21'},
        {name:"william",age:21,location:"kerela",doj:'2002-02-21'},
        {name:"john",age:34,location:"delhi",doj:'2005-02-21'},
        {name:"juli",age:43,location:"up",doj:'2008-02-21'},

    ]

    $scope.filterMethod = function(value){
        $scope.byName = value
        console.log($scope.byName);
    }
    // let d = new Date();
    // $scope.doj = function(value){
    //     // $scope.doj = value
    //     $scope.arrobj = $filter('orderBy')($scope.arrobj,'doj');
    // }
}])