let str = "hello hi how are you";
// let s="";
// for(let i=0;i<str.length;i++){
//     if(str.charAt(i) == " "){
//       s =  str.charAt(i+1).toUpperCase();
//       console.log(s);
//         str[i+1] =  s
//         console.log(str);
//     }
    
// }

// console.log("Upper :"+str);

// let s = "hello";
// console.log(s[2]);

let arr = str.split(" ");
for(let i=0;i<arr.length;i++){

    arr[i] = arr[i][0].toUpperCase()+ arr[i].substr(1);
}

console.log(arr.join(" "));