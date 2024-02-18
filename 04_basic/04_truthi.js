const userEmail="devesh.ai"
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Do not have user email");
}

/* //falsy values
false,0,-0, BigInt 0n,"",null,undefined,NaN
// truthy values
"0",'false'," ",[],{},function(){} */
 // if array
if(userEmail.length === 0){
    console.log("Array is Empty");
}
// if object
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}
//Nullish Coalescing Operator(??):null undefined

let val1,val2,val3;
val1=5 ?? 10
val2=null ?? 10
val3=undefined ?? 15
console.log(val1);
console.log(val2);
console.log(val3);