const vm = require("vm");
const fs = require("fs");
const utils = {};

utils.load = function(path,target){
    const file = fs.readFileSync(path);
    const script = new vm.Script(file);
    const context = {};
    script.runInNewContext(context);
    return context[target];
}

module.exports = utils;
