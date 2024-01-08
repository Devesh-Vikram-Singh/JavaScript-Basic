 
 /*Primitive
 7 types : String,Number,boolean,null,undefined,Symbol,BigInt*/

  const id=Symbol('123');
  const anotherId=Symbol('123');
  //console.log(id === anotherId);

 // Javascript is dynamic 
/* Non Primitive or Reference
Array,Objects,Functions*/
const heros=["shaktiman","naagraj","doga"];

let myObj =
{
    name:"devesh",
    age:18,
}

const myFunction = function(){
  //  console.log("Hello Bharat");
}

//console.log(typeof myObj);

/*******************----------  **********/
// Stack(Primitive) =copy banti hai
// Heap(Non Primitive)=reference milta hai

let myname="Devesh Vikram Singh"
let anothername=myname
anothername="Vaibhav Singh"
console.log(myname);
console.log(anothername);

let user1={
    email:"user@google.com",
    upi:"user@ypi"
}

let user2=user1
user2.email="devesh@google.com"
console.log(user1.email);
console.log(user2.email);