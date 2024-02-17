/*function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("E");
    console.log("S");
    console.log("H");
}*/
//sayMyName()

/*function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}*/

/*function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(3,4)
console.log("Result: ",result);*/

/*function loginUserMessage(username="devesh"){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("devesh"))
 //undefined answer aayega =>Interview important
console.log(loginUserMessage())*/

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}