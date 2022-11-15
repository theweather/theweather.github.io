const hello = function () {
  return "Hello World";
};
console.log(hello());
try {
  exports.hello = hello;
} catch (e) {
  console.log("catch error");
}
