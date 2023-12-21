var x = [
    {"number":3,"value":"a"},
    {"number":1,"value":"b"},
    {"number":2,"value":"c"},
]
// l = {"name":}

// let j = JSON.parse(x[0]);
// var y = x[0];
let z = JSON.stringify(x)
let v = JSON.parse(z);

var y = v.sort((a,b)=> a.number-b.number);
console.log(y);





// console.log(x);
// var y = x.sort();
// console.log(x);
// console.log(number.y);
