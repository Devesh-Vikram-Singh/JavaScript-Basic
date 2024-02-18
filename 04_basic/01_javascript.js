/* There are three type of javascript execution context
{} global function execution
1) Global Execution context
2) Function execution context
3) eval execution context

2 phase
1) memory creation phase
2) execution phase

//execution
 1) global execution

 2) memory phase
 val1=undefined
 val2=undefined
 addnum=defination
 result1=undefined
 result2=undefined

 3) Execution phase
 val1=10
 val2=5
 add Num-> new varaiable enviourment+execution  
 thread(after work done it should be delete)
  3(1)=memeory phase { val1=undefined val2=undefined total=undefined} 
  3(2)=execution context{num1=10 num2=5 total=15}

  same for result 2*/
  //PROGRAM
  let val1=10
  let val2=5
  function addNum(num1,num2){
    let total=num1+num2
    return total
  }
  let result1=addNum(val1,val2)
  let result2=addNum(10,5)
