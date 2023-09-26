// Maps in JS : We can use any type of key or value
const myMap = new Map();

const key1 = 'myStr',
    key2 = {},
    key3 = function () { }

// Setting map values
myMap.set(key1, 'This is a String')
myMap.set(key2, 'This is a blank obj')
myMap.set(key3, 'This is an empty function')

console.log(myMap);

// Getting a value from a map
let value1 = myMap.get(key3);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// We can loop using for..of to get key and values
for (let [key, value] of myMap) {
    console.log(key, value);
}
