//IIFE(Immediately Invoked Function Epression) is used to remove the global scope ke pollution ko dur karne ke liye kiya jata hai.. and it is immediately invoked the function

(function one(){
    //named IIFE
    console.log(`DB Connected`);
}) ();

// two iife ko connect karne ke liye hmm semicolumn(;) ka used karte hai
// in terms of arrow
( () =>{
    //Unnamed IIFE
    console.log(`DB Connected Two`);
})()

( (name) =>{
    console.log(`DB Connected Two ${name}`);
})(`devesh`)