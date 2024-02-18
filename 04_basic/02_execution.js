// if
/*const isUserloggedIn=true
if(isUserloggedIn){
    console.log("user suessfully logged In");
}

const temperature=41
if(temperature > 42){
    console.log("less than 40");
}
console.log("greater than 42");*/

/*const score = 200
if(score > 100){
    let power ="fly"
    console.log(`user power: ${power}`);
}*/

const balance=1000
//implict scope
//(balance > 500) console.log("test");

if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
 console.log("less than 750");
}
else{
    console.log("It is equal to 1000");
}

const userLoggedIn = true
const debitcard = true
if(userLoggedIn && debitcard){
    console.log("Allow to buy course");
}