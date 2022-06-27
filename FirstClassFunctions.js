a();
// b();


// Function Statement/ Function Declaration
    function a(){
        console.log("a is called");
    }

// Function Expression
    var b=function(){
        console.log("b is called");
    }

//Anonymous Function
// function (){
//     console.log("Anonymous function");
// }

//Named Function Expression

var c=function xyz(){
    console.log("c is called");   
}

c();       //xyz(); can't call by xyz name

//Difference between Parameters & Arguments?

function abc(params1,params2){   // parameter
    console.log(params1+params2);
}
args1=10;   // argument
args2=20;
abc(args1,args2);


//First Class Function/ First Class Citizens
    // the ability of passing function within a function as an argument is called first class function
function aa(params){
    console.log(params);
    return function bb(){

    }
}

console.log(aa(function cc(){}));

// Arrow Function
