// function x(){
//     var i=1;

//     setTimeout(() => {
//        console.log(i);
//     }, 3000);

//     console.log("hello chaitanya");
// }

// x();

function x() {
  for (var i = 1; i <= 10; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      },i*1000);
    }
    close(i);
  }
  console.log("hello chaitanya");
}
x();
