function fruitsIterator(values) {
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we will return this object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                //We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray);

const fruits = fruitsIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);