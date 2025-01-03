/*introduction to how we can use module in js */

const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8")
text = text.replace("browser","Rohan");

console.log("the content of the file is")
console.log(text);

console.log("Creating a new file ...");
fs.writeFileSync("mahesh.txt",text);
