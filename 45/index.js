let reg = /harry/; //This is a RE literal in JS
// reg = /harry/g; //g means global
// reg = /harry/i; //i means case sensitive

console.log(reg);
console.log(reg.source); //harry

let s = "This is great code with harry and also harry bhai";
/* Functions to match expressions
1. exec() - This function will return an array for match or null for no match */
let result = reg.exec(s);
// console.log(result); //['harry', index: 24, input: 'This is great code with harry ', groups: undefined]
// result = reg.exec(s);
// console.log(result);//['harry', index: 39, input: 'This is great code with harry and also harry bhai', groups: undefined]