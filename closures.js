





function z() {
  var b = 200;
  function x() {
    var a = 10;
    function y() {
      console.log(a, b);
    }
    a = 100;
    y();
  }
  x();
}
z();
