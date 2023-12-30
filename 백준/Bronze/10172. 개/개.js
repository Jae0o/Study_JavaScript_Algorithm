const rl = require("readline").createInterface(process.stdin, process.stdout);
let inputs = [];

rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  console.log("|\\_/|");
  console.log("|q p|   /}");
  console.log(`( 0 )"""\\`);
  console.log('|"^"`    |');
  console.log("||_/=\\\\__|");
});