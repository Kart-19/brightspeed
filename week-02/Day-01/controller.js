var apps = angular.module('myapp',[]);

apps.controller("product",function(){

    this.pname = "Laptops";
    this.quantity = 10;
    this.price = 1000;

    this.isavaliable= function(){
        if(this.quantity > 0){
            return "Yes Avaliable";
        }
        else{
            return "Not avaliable";
        }
    }
    
    
})