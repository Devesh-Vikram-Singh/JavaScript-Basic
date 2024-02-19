//for
/*for(let i=0;i<10;i++){
    const element=i;
    if(element==5){
        //console.log("5 is best number");
    }
   // console.log(element);
}*/
/*for(let i=1;i<10;i++){
    console.log(`outer loop value: ${i}`);
     for(let j=1;j<=10;j++){
       // console.log(`inner loop value: ${j} and outer loop value is ${i}`);
       console.log(i+'*'+j+ '=' + i*j);
     }
}*/

/*let arr=["ram","shayam","bharat"]
for(let i=0;i<arr.length;i++){
    const ele=arr[i];
    console.log(ele);
}*/

//break and continue
/*for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        break;
    }
    console.log(`value of i is ${i}`);
}*/
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
}