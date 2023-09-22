let regex = /harrygfkh/;
// Metacharacter symbols
regex = /^harrdc/; //^ means expression will match if string starts with
regex = /harry$/; //$ means expression will match if string ends with

// let str = "harry is a good boy and harry is code with harry";
// str = "hsdbdkvubdkuvb is hadrry"
// str = "harryi"
let str = "harry means codewith";

let result = regex.exec(str);
console.log("The result from exec is ", result);

if (regex.test(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`The string ${str} does not matches the expression ${regex.source}`);
}