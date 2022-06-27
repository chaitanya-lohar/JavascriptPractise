

var a=10;

function demo(){

    var x=100;  // x is locally define
}

console.log(window.a);    // global variable always attached with global object
console.log(a);
console.log(x);   // x is not globally define so we can't accesss it 

// 'this' and 'Window' are global objects