var log = require("./log")
var lowCase = require("lower-case")
var upCase = require("upper-case")

console.log(log.cwMessageOne("Convert a sentence into lower-case"))
console.log(lowCase.lowerCase("LOWER Case Example..."))

console.log(log.cwMessageTwo("Convert a sentence into a upper-case"))
console.log(upCase.upperCase("upper Case Example..."))