
// console.log(a);   //ReferenceError: Cannot access 'a' before initialization 
                
// console.log(d);   // ReferenceError: d is not defined

// let a=10
// var b=100
// console.log(b);


// let a=10   //Uncaught SyntaxError: Identifier 'a' has already been declared
// let a=100

// console.log("hello");
// let a=10   
// let a=100
    

// const a=100
// const a=1000

// console.log(a);


//const a;   //Uncaught SyntaxError: Missing initializer in const declaration

// const b=200;

// b=100;  //TypeError: Assignment to constant variable.

// console.log(b); 

// a=100;
// console.log(a);



// console.log(a);  //ReferenceError: Cannot access 'a' before initialization
// let a=1000;




//-------------------------------------------block and scope-----------------------------------------------



// if(true){

//     // compound statement/ block 
//     var a=100;
//     console.log(a);

// }




// var a=100;    var allows to make shadow of itself where let doesn't allow to make shadow of it

// let a=100;
// if(true){
//     let a=10;
//     let b=20;
//     const c=30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

//--------------------

// let a=100;

// function x(){
//     var a=200;
// }
// x();
// console.log(a);

//--------------------

// var a=100;

// function x(){
//     var a=200;
//     console.log(a);
// }
// x();
// console.log(a);