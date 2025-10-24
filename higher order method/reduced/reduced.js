const arr=[2,4,6,8]
let values=arr.reduce((h,c)=>h+c,0)
console.log(values);

const arr1=[2,4,6,8]
let values1=arr1.reduce((h,c)=>h+c,1)
console.log(values1);

const add=[2,4,6,8]
let dot=add.reduce((j,k)=>j*k,0)
console.log(dot);


const add2=[2,4,6,8]
let dot2=add2.reduce((j,k)=>j*k,2)
console.log(dot2);


const sub=[2,4,6,8]
let subtraction=sub.reduce((j,k)=>j-k,2)
console.log(subtraction);



const div=[2,4,6,8]
let divided=div.reduce((j,k)=>j/k,2)
console.log(divided);



const names=["ranjith","siva","bala"]
let mes=names.reduce((j,k)=>j==k,0)
console.log(mes);

const names1=[23,56,89]
let mes1=names1.reduce((j,k)=>j<=k,0)
console.log(mes1);

const no=[23,89]
let pad=no.reduce((j,k)=>j*k,1)
console.log(pad);


const net=[23,56,89]
let str=net.reduce((j,k)=>j+k,10)
console.log(str);

