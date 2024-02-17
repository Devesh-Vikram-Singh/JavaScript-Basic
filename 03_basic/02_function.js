//shoping card 
/*function calculateCardPrice(num1){
    return num1
}
console.log(calculateCardPrice(200))

//to avoid this problem we use the REST Operator
console.log(calculateCardPrice(200,400,300))*/

function calculateCardPrice(...num1){
    return num1
}
//console.log(calculateCardPrice(200,400,300))

function calculateCardPrice1(val1,val2,...num1){
    return num1
}
//console.log(calculateCardPrice1(200,400,300,4000))

const user={
    username:"devesh",
    price:199

}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
//method 2
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,6000]));