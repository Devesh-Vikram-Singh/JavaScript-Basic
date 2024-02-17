/*if(true){
let a=10
const b=20
var c=30
}
//avoid the var because it can treated like a global variable
console.log(a);
console.log(b);
console.log(c);*/

/*let a=20
if(true){
    let a=10
    const b=20
    console.log("INNER:",a)
    }
    console.log("OUTER:",a)*/

  function one(){
    const username="devesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
  }  
  //one()
  if(true){
    const username="devesh"
    if(username==="devesh"){
        const website="youtube"
        console.log(username + website);
    }
      //console.log(website);
  }
  
  //console.log(username);


  //++***** interesting **++
 console.log(addone(5));
  function addone(num){
      return num+1
  }
  addone(5)
  
  //console.log(addTwo(5)); this is wrong declearation
  const addTwo=function(num){
    return num+2
  }
  addTwo(5)