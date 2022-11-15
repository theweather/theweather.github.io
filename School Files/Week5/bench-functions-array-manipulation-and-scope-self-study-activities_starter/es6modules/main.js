import {
    hello,
    funcs,
    f1,
    f2
} from "./module.js";
document.getElementById("app").innerHTML = hello;
funcs.foo();
funcs.bar();
f1("Goodnight");
f2('Good morning');