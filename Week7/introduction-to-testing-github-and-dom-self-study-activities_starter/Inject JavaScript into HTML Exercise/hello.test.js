const hello = require("./hello");
describe("My hello", () => {
  test("hello", () => {
    expect(hello.hello()).toEqual("Hello World");
  });
});
