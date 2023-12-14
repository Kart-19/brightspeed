let arr = [1,3,5,7,9,];
//Spread
function spread(a,b,c,d){
 
    console.log(a,b,c,d);
}

spread(...arr);

//Rest
function rest(...arr){
    for (const i of arr) {
            console.log(i);
    }
}

rest(10,20,30,40);

//Combinatin of Spread and Rest
function resp(...re){
    console.log("Combination of Rest & Spread : ");
    for (const i of re) {
        console.log(i);
    }
}
resp(...arr);